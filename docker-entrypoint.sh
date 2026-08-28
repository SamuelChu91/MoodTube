#!/bin/bash
set -e

# Run any pending migrations before booting the server.
bundle exec rails db:migrate

# Seeding is destructive (db/seeds.rb wipes all users/videos before
# recreating demo data), so it only runs when explicitly requested via
# the RUN_SEED environment variable — never automatically on every boot.
if [ "$RUN_SEED" = "true" ]; then
  echo "RUN_SEED=true detected — running db:seed..."
  bundle exec rails db:seed
  echo "db:seed finished."
fi

exec "$@"
