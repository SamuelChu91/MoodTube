# --- MoodTube production image ---
# Uses the app's original Ruby 2.5 / Rails 5.2 stack so no framework upgrade
# is required. Render (and most hosts) can deploy this directly via Docker.

FROM ruby:2.5.1-slim

# The official ruby:2.5.1 image bakes in BUNDLER_VERSION=1.16.6, which
# overrides any per-command version pinning. Override it here so every
# `bundle` call in this image — install, asset build, migrations, server —
# consistently uses the version our Gemfile.lock actually needs.
ENV BUNDLER_VERSION=2.0.2

# Debian "Stretch" (this image's base OS) is end-of-life and removed from
# the normal mirrors — point apt at the archive instead so installs work.
# Its signing keys have also expired since retirement, so we mark the repo
# as trusted rather than fighting expired GPG keys for packages we already
# trust (they're the same official Debian packages, just past their EOL date).
RUN sed -i \
      -e 's|deb.debian.org/debian |archive.debian.org/debian |g' \
      -e 's|security.debian.org|archive.debian.org|g' \
      -e '/stretch-updates/d' \
      -e 's|^deb |deb [trusted=yes] |' \
      /etc/apt/sources.list && \
    echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until

# System deps: build tools for native gems (pg, bcrypt, sassc, etc.)
# and libpq for the postgres client.
RUN apt-get update -qq && apt-get install -y --no-install-recommends --allow-unauthenticated \
      build-essential \
      libpq-dev \
      curl \
      git \
      xz-utils \
      shared-mime-info \
    && rm -rf /var/lib/apt/lists/*

# Node.js for webpack + the asset pipeline — installed from the official
# binary tarball rather than a distro package, since Stretch's package repos
# are archived and unreliable for third-party sources like NodeSource.
RUN curl -fsSL https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz -o /tmp/node.tar.xz \
    && tar -xJf /tmp/node.tar.xz -C /usr/local --strip-components=1 \
    && rm /tmp/node.tar.xz

WORKDIR /app

# Install gems first so Docker can cache this layer between builds
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v ${BUNDLER_VERSION} && \
    bundle config set without 'development test' && \
    bundle update mimemagic --conservative && \
    bundle install --jobs 4 --retry 3

# Install JS deps (this also triggers the webpack production build via the
# package.json "postinstall" script, producing app/assets/javascripts/bundle.js)
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

# Now copy the rest of the app
COPY . .

# Rails needs to boot fully to precompile assets, which means it needs the
# credentials master key at build time. Render injects dashboard env vars as
# Docker build args automatically for services built from a Dockerfile.
ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY=${RAILS_MASTER_KEY}
ENV RAILS_ENV=production
ENV NODE_ENV=production

RUN bundle exec rails assets:precompile

# Serve /public ourselves since there's no separate nginx/Apache in this container
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

EXPOSE 3000

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
