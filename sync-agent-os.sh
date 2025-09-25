#!/bin/bash

# ABOUTME: Sync script to synchronize files from ~/.agent-os to current directory
# ABOUTME: Uses rsync with safety checks and excludes git and other sensitive files

set -euo pipefail

SOURCE_DIR="/Users/ricardo/.agent-os"
TARGET_DIR="$(pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if source directory exists
if [[ ! -d "$SOURCE_DIR" ]]; then
    print_error "Source directory $SOURCE_DIR does not exist!"
    exit 1
fi

# Check if we're in a git repository
if [[ ! -d ".git" ]]; then
    print_warning "Current directory is not a git repository. Proceeding anyway..."
fi

print_status "Syncing from $SOURCE_DIR to $TARGET_DIR"
print_status "Current directory: $(basename "$TARGET_DIR")"

# Create rsync exclude file
EXCLUDE_FILE=$(mktemp)
cat > "$EXCLUDE_FILE" << 'EOF'
.git/
.github/
.gitignore
.DS_Store
*.log
.env
.env.*
node_modules/
dist/
build/
coverage/
.nyc_output/
.vscode/
.idea/
*.swp
*.swo
*~
EOF

# Show what will be synced (dry run first)
print_status "Performing dry run to show what would be synced..."
echo

rsync -av --dry-run --delete --exclude-from="$EXCLUDE_FILE" \
    "$SOURCE_DIR/" "$TARGET_DIR/" | grep -E "^(deleting|>|sending)" || true

echo
read -p "$(echo -e "${YELLOW}Do you want to proceed with the sync? [y/N]:${NC} ")" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Starting sync..."

    # Perform the actual sync
    if rsync -av --delete --exclude-from="$EXCLUDE_FILE" \
        "$SOURCE_DIR/" "$TARGET_DIR/"; then
        print_success "Sync completed successfully!"

        # Show git status if we're in a git repo
        if [[ -d ".git" ]]; then
            echo
            print_status "Git status after sync:"
            git status --porcelain || true
        fi
    else
        print_error "Sync failed!"
        exit 1
    fi
else
    print_status "Sync cancelled by user."
    exit 0
fi

# Cleanup
rm -f "$EXCLUDE_FILE"

print_success "Script completed."