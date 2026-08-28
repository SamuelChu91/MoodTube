# Deploying MoodTube to Render (free) + Neon (free Postgres)

## What changed in the code
- `config/database.yml` — production now reads a single `DATABASE_URL`
  instead of separate username/password vars. Works with Neon, Render
  Postgres, or any standard Postgres connection string.
- `Dockerfile` — builds and runs the app on its original Ruby 2.5.1 / Rails
  5.2.3 stack, so no framework upgrade was needed.
- `docker-entrypoint.sh` — runs `rails db:migrate` automatically before the
  server starts on every deploy.
- `render.yaml` — optional blueprint so Render can configure the service
  from this repo automatically.

## About your data
There's no way for me to tell from the code whether your old Heroku
Postgres data still exists — that depends entirely on what happened on
Heroku's end. To check:
1. Log into your Heroku dashboard (if it still loads at all) and look for
   the app and its Postgres add-on.
2. If the app was removed for inactivity, the attached database was very
   likely deleted with it — Heroku doesn't keep orphaned databases around.
3. If you have a `.dump` or `.sql` backup file from before, keep it — you
   can restore it into the new database in step 3 below.

If it's gone, the app will simply start with an empty database, which
`db/seeds.rb` can help repopulate with placeholder data if you'd like.

## 1. Create a free Postgres database on Neon
1. Go to https://neon.tech and sign up (no card required).
2. Create a new project. Note the connection string it gives you — it looks
   like `postgres://user:password@ep-xxxx.neon.tech/dbname?sslmode=require`.
3. If you have an old backup: `pg_restore` or `psql` it into this new
   database using that connection string, following Neon's import docs.

## 2. Get your Rails master key
Locally, run:
```
cat config/master.key
```
Copy the value — you'll paste it into Render as `RAILS_MASTER_KEY`. This
file is gitignored on purpose, so it won't be in your GitHub repo; that's
expected and correct.

## 3. Push these changes to GitHub
Commit the new `Dockerfile`, `docker-entrypoint.sh`, `.dockerignore`,
`render.yaml`, and the updated `config/database.yml`, then push to your
repo.

## 4. Create the Render service
1. Go to https://render.com and sign up (no card required for free tier).
2. Click **New > Web Service**, connect your GitHub repo.
3. Render should detect the `render.yaml` and offer to use it — accept it.
   (If it doesn't, manually choose **Docker** as the runtime and select the
   free instance type.)
4. In the service's **Environment** tab, set:
   - `RAILS_MASTER_KEY` → the value from step 2
   - `DATABASE_URL` → the Neon connection string from step 1
5. Deploy. Watch the build logs — the first build will take a few minutes
   (installing gems, npm packages, and compiling assets).

## Good to know about the free tier
- The service spins down after ~15 minutes of no traffic and takes 30-60
  seconds to wake back up on the next request. Fine for a personal project,
  noticeable if you're demoing it live.
- 750 free instance-hours/month — enough to run one service continuously.
- Your AWS S3 bucket (for video file storage) is unrelated to Render/Neon
  and keeps working as-is, as long as the AWS credentials are still valid
  in your Rails credentials file.
