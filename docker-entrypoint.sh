#!/bin/bash
set -e

# Run any pending migrations before booting the server.
bundle _2.0.2_ exec rails db:migrate

exec "$@"
