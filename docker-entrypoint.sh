#!/bin/bash
set -e

# Run any pending migrations before booting the server.
bundle exec rails db:migrate

exec "$@"
