# Setlist Generator - Development Setup

## Prerequisites
- Ruby 2.6.3 (via rbenv)
- Node.js (for React frontend)
- PostgreSQL (via Postgres.app or homebrew)

## First Time Setup

1. **Clone and Navigate**
   ```bash
   git clone <your-repo>
   cd setlist-generator/setlists
   ```

2. **Ruby/Rails Setup**
   ```bash
   bundle install
   ```

3. **Database Setup**
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

4. **Frontend Setup**
   ```bash
   cd client
   npm install
   cd ..
   ```

## Daily Development Workflow

### Starting the Application
1. **Start Rails API Server** (Terminal 1):
   ```bash
   cd setlists
   export BUNDLE_GEMFILE=/Users/francinekline/pandas/projects/setlist-generator/setlists/Gemfile
   bundle exec puma config.ru -p 3000
   ```

2. **Start React Frontend** (Terminal 2):
   ```bash
   cd setlists/client
   PORT=3001 npm start
   ```

3. **Access the Application**:
   - Frontend: http://localhost:3001
   - API: http://localhost:3000

### Troubleshooting Commands
- Test API: `curl http://localhost:3000/songs`
- Reset Database: `rails db:reset`
- Check Rails version: `rails -v`
- Check Ruby version: `ruby -v`

## Common Issues & Solutions

### Rails Server Won't Start
- Ensure you're in the `/setlists` directory (not root)
- Use the full puma command with config.ru
- Check that PostgreSQL is running

### React Server Issues
- Use explicit PORT=3001 to avoid conflicts
- If you get OpenSSL errors, use Node.js version 16 or earlier

### Database Issues
- Your song data is in `db/seeds.rb` - this is your source of truth
- Always run `rails db:seed` after `rails db:migrate`
- Check PostgreSQL is running: `brew services start postgresql`

## Important Files
- `db/seeds.rb` - Your 144 songs (BACKUP THIS!)
- `client/src/services/api-helper.js` - API connection settings
- `config/database.yml` - Database configuration
