#!/usr/bin/env bash
# Build script for Render deployment

# Install Ruby dependencies
bundle install

# Setup database
bundle exec rails db:create RAILS_ENV=production
bundle exec rails db:migrate RAILS_ENV=production
bundle exec rails db:seed RAILS_ENV=production

# Build React frontend
cd client
npm install
npm run build
cd ..

# Copy React build to Rails public directory
cp -r client/build/* public/
