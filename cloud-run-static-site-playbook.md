# Playbook — GitHub → Cloud Run auto-deploy (static site)

A repeatable recipe for hosting a static HTML/JS/CSS site on Cloud Run that
**rebuilds and redeploys automatically on every push to `main`**, served
publicly, running as a least-privilege identity.

Written from a real setup; the **Gotchas** section at the end is the part that
saves hours — read it before you start.

---

## 0. What you're building
```
GitHub repo (main)
   │  push
   ▼
Cloud Build trigger  ──build Dockerfile──►  Artifact Registry image
   │                                              │
   └───────────────── deploy ─────────────────────┘
                          ▼
                  Cloud Run service  (public, least-privilege SA)
```
Core pieces: **one Dockerfile**, **one managed trigger**, a little **one-time
IAM**. Nothing else is required. Resist adding a `cloudbuild.yaml` unless you
genuinely need custom build steps (see Gotcha 7).

## 1. Prerequisites
- `gcloud` and `gh` installed and authenticated (`gcloud auth login`,
  `gh auth status`).
- A **GCP project** with **billing enabled**.
- A **GitHub repo** for the site.
- Decide four values up front and reuse them everywhere:
  - `PROJECT_ID`   – e.g. `my-site-123456`
  - `REGION`       – e.g. `us-central1`
  - `SERVICE`      – e.g. `my-site` (keep it == repo name to stay sane)
  - `GITHUB_OWNER/REPO`

### patmont.com — standing config (fill these in by default)
This org is the expected home for these projects, so its constants and one-time
setup are already known:

| Value | Setting |
|---|---|
| `ORG_ID` | `594872986567` (patmont.com) |
| Default `REGION` | `us-central1` |
| gcloud identity | `calvin@patmont.com` — **org admin**, and already granted `roles/orgpolicy.policyAdmin` (done once, so no re-grant needed) |
| GitHub identity | `unicornstrux` — **different** from the GCP identity; authenticate `gh` and `gcloud` separately |
| Reference project | `learn-to-draw-501718` (a working example of this exact setup) |

**Standing constraint:** patmont.com **enforces Domain Restricted Sharing**, so
**every new project needs the project-scoped DRS exception** before it can be
public. It's a required step here, not an edge case — see step 5.

## 2. Repo files
Only two files are needed. Add them to the repo root.

**`Dockerfile`** — nginx serving static files on Cloud Run's `$PORT`:
```dockerfile
FROM nginx:1.27-alpine
COPY . /usr/share/nginx/html
# Cloud Run sends traffic to $PORT (default 8080), but nginx defaults to 80.
# The base image renders /etc/nginx/templates/*.template -> conf.d/*.conf at
# startup, substituting env vars. Create the templates dir (it does NOT exist
# in the image) and write a config that listens on ${PORT}. $uri is an nginx
# runtime variable, not an env var, so envsubst leaves it alone.
RUN mkdir -p /etc/nginx/templates && { \
      echo 'server {'; \
      echo '  listen ${PORT};'; \
      echo '  server_name _;'; \
      echo '  root /usr/share/nginx/html;'; \
      echo '  index index.html;'; \
      echo '  location / { try_files $uri $uri/ =404; }'; \
      echo '}'; \
    } > /etc/nginx/templates/default.conf.template
```

**`.dockerignore`** — keep junk out of the image:
```
.git
.gitignore
.github
.dockerignore
Dockerfile
docs
```

Commit and push to `main`.

## 3. First deploy (creates the service + Artifact Registry repo)
Enable APIs, then deploy from source once. This auto-creates the
`cloud-run-source-deploy` Artifact Registry repo and the Cloud Run service.
```bash
gcloud config set project PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com \
  artifactregistry.googleapis.com --project PROJECT_ID

gcloud run deploy SERVICE --source . --region REGION --quiet
```
If the build fails on a fresh project with a **storage 403** for the Compute SA,
grant it the builder role and retry (see Gotcha 4):
```bash
PROJECT_NUMBER=$(gcloud projects describe PROJECT_ID --format='value(projectNumber)')
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/cloudbuild.builds.builder"
```

## 4. Least-privilege runtime identity (recommended)
Don't run the container as the default Compute SA (it has broad Editor). A
static site needs **no** permissions:
```bash
gcloud iam service-accounts create SERVICE-run --project PROJECT_ID
gcloud run services update SERVICE --region REGION \
  --service-account=SERVICE-run@PROJECT_ID.iam.gserviceaccount.com
```
This SA is stored on the *service* and persists across all future deploys — you
never re-specify it (see Gotcha 7).

## 5. Make it public
**On patmont.com, do the DRS exception first** (the org enforces Domain
Restricted Sharing, so the plain invoker grant below will otherwise fail).
`orgpolicy.policyAdmin` is already held by `calvin@patmont.com`, so no role grant
is needed — just apply the project-scoped policy:
```bash
gcloud services enable orgpolicy.googleapis.com --project PROJECT_ID
cat > drs.yaml <<'EOF'
name: projects/PROJECT_ID/policies/iam.allowedPolicyMemberDomains
spec:
  rules:
    - allowAll: true
EOF
gcloud org-policies set-policy drs.yaml --project PROJECT_ID
```
Then grant public access:
```bash
gcloud run services add-iam-policy-binding SERVICE \
  --region=REGION --member=allUsers --role=roles/run.invoker
```
(On an org *without* DRS, skip straight to the invoker grant. If it fails with
`FAILED_PRECONDITION: ... do not belong to a permitted customer`, DRS is in play
— see Gotcha 5.)

## 6. Continuous deployment (the auto-deploy part)
Use Cloud Run's built-in flow — it creates and manages the Cloud Build trigger
for you, no manual trigger wiring:

**Console → Cloud Run → open SERVICE → "Set up continuous deployment"**
→ connect the GitHub repo (one-time OAuth) → branch `^main$` → build type
**Dockerfile**.

From then on: **push to `main` → build → deploy new revision.** The trigger
deploys to the *existing* service, so public access and the runtime SA carry
over automatically.

> The GitHub connect step needs an interactive browser OAuth; it can't be done
> from the CLI. Everything else can.

For the trigger to build and deploy, its build service account (usually the
Compute SA) needs — beyond `cloudbuild.builds.builder` from step 3:
```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/run.admin"
gcloud iam service-accounts add-iam-policy-binding \
  SERVICE-run@PROJECT_ID.iam.gserviceaccount.com \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

## 7. Verify
```bash
# Watch the latest build:
gcloud builds list --limit=1 --format="value(id,status)"
# (regional builds: add --region=REGION)

# Check it serves publicly:
curl -s -o /dev/null -w "%{http_code}\n" "$(gcloud run services describe SERVICE \
  --region REGION --format='value(status.url)')"
```

## 8. Custom domain (optional) — map a subdomain
Free, with an auto Google-managed SSL cert. Example: `draw.patmont.com` → the
service. (For high scale or an apex/root domain, a Load Balancer is sturdier;
for a subdomain on a static site, a domain mapping is the simple choice.)

```bash
# Managed domain mappings live under `beta`:
gcloud components install beta --quiet

# Try to create it — if the domain isn't verified yet, this tells you so:
gcloud beta run domain-mappings create --service SERVICE \
  --domain SUB.EXAMPLE.com --region REGION
```

**Verify ownership (one-time), if prompted:**
- Google Search Console (search.google.com/search-console) → add a **Domain**
  property for the domain → it gives a `TXT` `google-site-verification=…`.
- Add that `TXT` at your DNS host (Name = the subdomain label, e.g. `draw`, or
  `@` for the apex) → click **Verify**.
- Confirm: `gcloud domains list-user-verified`.

**Create the mapping** (now succeeds) and read the records it prints:
```bash
gcloud beta run domain-mappings create --service SERVICE \
  --domain SUB.EXAMPLE.com --region REGION
```
It returns either **four `A` + four `AAAA`** records (Google anycast front-end
IPs) or a single **`CNAME` → `ghs.googlehosted.com`**. Add them at your DNS host
on the subdomain label:
- **A/AAAA set** — the safe default; these coexist with the verification `TXT`
  on the same name.
- **CNAME → ghs.googlehosted.com** — one record, but only if *nothing else*
  (including the `TXT`) shares that name — a `CNAME` must stand alone.

What the records do: **`TXT`** proves ownership (no routing); **`A`/`AAAA`**
point the hostname at Google's front end; the **domain mapping** routes that
hostname to your service *inside* Google and provisions the cert.

Then wait for DNS propagation + cert issuance (minutes, up to ~24h). Check:
```bash
gcloud beta run domain-mappings describe --domain SUB.EXAMPLE.com \
  --region REGION --format="value(status.conditions)"
curl -sI https://SUB.EXAMPLE.com | head -1
```

**patmont.com:** DNS is hosted at **GoDaddy** (`*.secureserver.net` /
`dcc.secureserver.net`), not Cloud DNS — add records in the GoDaddy DNS
dashboard. Working example: `draw.patmont.com` → `learn-to-draw`.

---

## Gotchas (the expensive lessons)

1. **`/etc/nginx/templates/` does not exist in `nginx:alpine`.** Writing a
   template there fails with a misleading `No such file or directory` (it means
   the *destination dir*, not your file). `mkdir -p` it first — as the Dockerfile
   above does.

2. **Cloud Run needs the container on `$PORT` (8080), nginx defaults to 80.** If
   you don't fix the port, the container starts but Cloud Run's startup probe
   fails and the deploy fails. The `${PORT}` template handles it.

3. **"Source" vs "Repository" deployment type are different things.**
   - *Source* = a one-shot manual deploy of local code (`gcloud run deploy
     --source .`). No repo link.
   - *Repository* = continuous deployment; Cloud Run manages a Cloud Build
     trigger that redeploys on push. This is the auto-deploy you want.
   - The **"Triggers" tab inside a Cloud Run service is Eventarc** (events that
     *invoke* the service) — NOT build/deploy. Wrong place for CI/CD.

4. **Fresh projects: the Compute SA lacks build permissions.** First source
   build often 403s reading the upload bucket. Grant
   `roles/cloudbuild.builds.builder` (and later `roles/run.admin` +
   `actAs` on the runtime SA for trigger deploys).

5. **Domain Restricted Sharing (DRS) blocks `allUsers`.** If the org enforces
   `iam.allowedPolicyMemberDomains`, public access is refused. Fix with a
   **project-scoped** exception — do NOT disable DRS org-wide:
   ```bash
   gcloud services enable orgpolicy.googleapis.com --project PROJECT_ID
   cat > drs.yaml <<'EOF'
   name: projects/PROJECT_ID/policies/iam.allowedPolicyMemberDomains
   spec:
     rules:
       - allowAll: true
   EOF
   gcloud org-policies set-policy drs.yaml --project PROJECT_ID
   ```
   **Org Admin ≠ Org Policy Admin.** Even an org administrator may lack
   `orgpolicy.policies.create`. Grant it once at the org level:
   ```bash
   gcloud organizations add-iam-policy-binding ORG_ID \
     --member="user:you@example.com" --role="roles/orgpolicy.policyAdmin"
   ```
   *On patmont.com (`ORG_ID=594872986567`) this is already granted to
   `calvin@patmont.com`, so you can skip straight to `set-policy`.*

6. **You can't create classic (1st-gen) GitHub triggers via CLI anymore.**
   `gcloud builds triggers create github ...` returns a bare `INVALID_ARGUMENT`.
   Google requires 2nd-gen / managed connections now. Use Cloud Run's
   "Set up continuous deployment" (step 6) or the Cloud Build console, which do
   the OAuth connection for you.

7. **Service config persists across deploys — don't over-engineer.** The runtime
   SA, region, memory, env vars, and public access live on the *service*. A
   deploy that omits `--service-account` inherits the existing one. So you do
   **not** need a `cloudbuild.yaml` that re-pins the SA every time; the managed
   Dockerfile trigger is simpler and just as correct. Only add a `cloudbuild.yaml`
   for genuinely custom build steps (multi-stage, tests, extra images).

8. **Build logs may be in Cloud Logging, not GCS.** `gcloud builds log ID` can
   come back empty. Then use `gcloud builds describe ID --region=REGION` for
   `failureInfo`, and note trigger-driven builds are often **regional** — list
   them with `gcloud builds list --region=REGION`.

9. **Dropbox/OneDrive + git in the same folder can fight.** A synced folder may
   delete or rewrite working-tree files mid-operation. Prefer a non-synced path
   for the working copy; if you must sync, commit often and `git restore` if a
   file vanishes.

10. **Domain mappings: `beta` component, verification, and record types.**
    Managed Cloud Run domain mappings need `gcloud components install beta`. You
    must verify domain ownership (a Search Console `TXT`) *before* the mapping
    can be created. The mapping often returns **`A`/`AAAA`** records, not a
    `CNAME` — and a `CNAME` can't share a name with the verification `TXT`, so
    prefer the `A`/`AAAA` set (they coexist with the `TXT`). You point DNS at
    Google's front end, not at the `*.run.app` URL; the mapping does the
    hostname→service hop internally.

---

## Minimal teardown
```bash
gcloud run services delete SERVICE --region REGION --quiet
# Optional: delete the managed trigger, the SERVICE-run SA, and the
# Artifact Registry images if not reused.
```

## Quick reference — the whole thing, once values are set
```bash
# one-time
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud run deploy SERVICE --source . --region REGION --quiet
gcloud iam service-accounts create SERVICE-run
gcloud run services update SERVICE --region REGION \
  --service-account=SERVICE-run@PROJECT_ID.iam.gserviceaccount.com
gcloud run services add-iam-policy-binding SERVICE --region REGION \
  --member=allUsers --role=roles/run.invoker          # (+ DRS exception if blocked)
# then: Cloud Run console → Set up continuous deployment → connect repo, main, Dockerfile

# optional custom subdomain (verify ownership in Search Console first):
gcloud components install beta --quiet
gcloud beta run domain-mappings create --service SERVICE --domain SUB.EXAMPLE.com --region REGION
# add the A/AAAA records it prints at your DNS host, on the subdomain label
```
