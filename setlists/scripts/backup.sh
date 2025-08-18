#!/bin/bash
# Backup script for setlist generator data

BACKUP_DIR="$(pwd)/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "Creating backup at $BACKUP_DIR/backup_$DATE"

# Backup the seeds file (your song data)
cp db/seeds.rb "$BACKUP_DIR/seeds_backup_$DATE.rb"

# Backup the database
pg_dump setlists_development > "$BACKUP_DIR/database_backup_$DATE.sql"

# Backup important config files
cp config/database.yml "$BACKUP_DIR/database_yml_backup_$DATE.yml"
cp client/src/services/api-helper.js "$BACKUP_DIR/api_helper_backup_$DATE.js"

echo "Backup complete! Files saved to $BACKUP_DIR/"
echo "Your 144 songs are safely backed up in seeds_backup_$DATE.rb"
