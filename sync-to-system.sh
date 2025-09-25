#!/bin/bash

# ABOUTME: Sync enhanced Agent OS from current directory to system installation (~/.agent-os)
# ABOUTME: This syncs your local development changes to the system Agent OS installation

set -euo pipefail

SOURCE_DIR="$(pwd)"
TARGET_DIR="/Users/ricardo/.agent-os"

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

# Check if we're in the agent-os directory
if [[ ! -f "README.md" ]] || [[ ! -d "instructions" ]]; then
    print_error "This script must be run from the agent-os repository root!"
    exit 1
fi

# Check if target directory exists
if [[ ! -d "$TARGET_DIR" ]]; then
    print_warning "Target directory $TARGET_DIR does not exist. Creating it..."
    mkdir -p "$TARGET_DIR"
fi

print_status "Syncing enhanced Agent OS to system installation"
print_status "FROM: $SOURCE_DIR"
print_status "TO:   $TARGET_DIR"
echo

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
agent-os-comprehensive-guide.html
sync-to-system.sh
sync-agent-os.sh
.agent-os/
EOF

# Show what will be synced (dry run first)
print_status "Performing dry run to show what would be synced..."
echo

rsync -av --dry-run --delete --exclude-from="$EXCLUDE_FILE" \
    "$SOURCE_DIR/" "$TARGET_DIR/" | grep -E "^(deleting|>|sending)" | head -20 || true

if rsync -av --dry-run --delete --exclude-from="$EXCLUDE_FILE" \
    "$SOURCE_DIR/" "$TARGET_DIR/" | grep -E "^(deleting|>|sending)" | wc -l | read count && [ "$count" -gt 20 ]; then
    echo "... and $(($count - 20)) more files"
fi

echo
read -p "$(echo -e "${YELLOW}Do you want to proceed with syncing TO system installation? [y/N]:${NC} ")" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Starting sync to system installation..."

    # Perform the actual sync
    if rsync -av --delete --exclude-from="$EXCLUDE_FILE" \
        "$SOURCE_DIR/" "$TARGET_DIR/"; then
        print_success "Enhanced Agent OS synced to $TARGET_DIR successfully!"
        
        echo
        print_status "Summary of synced components:"
        echo "  ✅ Enhanced instructions (including new-spec.md)"
        echo "  ✅ Question databases (9 domain-specific)"
        echo "  ✅ Multi-stage planning framework"
        echo "  ✅ Agent coordination system"
        echo "  ✅ Planning enhancements"
        echo "  ✅ Templates and configurations"
        echo "  ✅ Enhanced standards"
        
        # Ensure setup scripts are copied and executable
        if [[ -f "$SOURCE_DIR/setup/base.sh" ]]; then
            cp "$SOURCE_DIR/setup/base.sh" "$TARGET_DIR/setup/base.sh"
            print_status "Copied base.sh to system installation"
        fi
        
        if [[ -f "$TARGET_DIR/setup/base.sh" ]]; then
            chmod +x "$TARGET_DIR/setup/base.sh"
            chmod +x "$TARGET_DIR/setup/project.sh"
            chmod +x "$TARGET_DIR/setup/functions.sh" 2>/dev/null || true
            echo
            print_success "Setup scripts are executable"
        else
            print_warning "base.sh not found in target directory"
        fi
        
        echo
        print_status "Next steps:"
        echo "  1. Navigate to any project directory"
        echo "  2. Run: setup-aos"
        echo "  3. Start using enhanced features with:"
        echo "     @.agent-os/instructions/core/new-spec.md"
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

print_success "Sync to system installation completed!"