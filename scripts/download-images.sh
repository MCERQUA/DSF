#!/bin/bash

# Desert Spray Foaming - Image Download Script
# This script downloads all images from the live website

set -e

# Configuration
SITE_URL="https://desertsprayfoaming.com"
OUTPUT_DIR="../public/images"
TEMP_DIR="/tmp/dsf-images"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Desert Spray Foaming Image Downloader${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"
mkdir -p "$TEMP_DIR"

cd "$(dirname "$0")"

echo -e "${YELLOW}Step 1: Downloading website assets with wget...${NC}"

# Use wget to mirror just the images
wget --mirror \
     --no-parent \
     --no-host-directories \
     --accept=jpg,jpeg,png,gif,webp,svg,ico \
     --reject-regex=".*\?.*" \
     --directory-prefix="$TEMP_DIR" \
     --quiet \
     --show-progress \
     "$SITE_URL/wp-content/uploads/" 2>/dev/null || true

echo ""
echo -e "${YELLOW}Step 2: Organizing downloaded images...${NC}"

# Find and copy all images to output directory
find "$TEMP_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.svg" \) -exec cp {} "$OUTPUT_DIR/" \; 2>/dev/null || true

echo ""
echo -e "${YELLOW}Step 3: Downloading specific known images...${NC}"

# Download specific known images from the website
# Logo
curl -s -o "$OUTPUT_DIR/logo.webp" "${SITE_URL}/wp-content/uploads/2023/10/DSF-Logo-Color.webp" 2>/dev/null || echo "Logo download skipped"

# Try common image patterns
PAGES=("" "about-us" "services" "contact-us" "services-gallery")

for page in "${PAGES[@]}"; do
    echo "Checking page: ${page:-homepage}"
    curl -s "${SITE_URL}/${page}/" | grep -oP 'https?://[^"'\'']+\.(jpg|jpeg|png|webp|gif)' | head -20 | while read -r img_url; do
        filename=$(basename "$img_url" | sed 's/\?.*//g')
        if [ ! -f "$OUTPUT_DIR/$filename" ]; then
            curl -s -o "$OUTPUT_DIR/$filename" "$img_url" 2>/dev/null && echo "  Downloaded: $filename"
        fi
    done
done

echo ""
echo -e "${YELLOW}Step 4: Creating placeholder images for missing assets...${NC}"

# Create a simple placeholder SVG for missing images
cat > "$OUTPUT_DIR/placeholder.svg" << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect fill="#391f56" width="800" height="600"/>
  <text x="400" y="300" font-family="Arial" font-size="24" fill="#caa982" text-anchor="middle">Desert Spray Foaming</text>
</svg>
EOF

# Create symlinks for expected image names if they don't exist
declare -A IMAGE_PLACEHOLDERS=(
    ["hero-bg.jpg"]="placeholder.svg"
    ["about-hero.jpg"]="placeholder.svg"
    ["about-bg.jpg"]="placeholder.svg"
    ["about-work.jpg"]="placeholder.svg"
    ["services-hero.jpg"]="placeholder.svg"
    ["contact-hero.jpg"]="placeholder.svg"
    ["insulation-work.jpg"]="placeholder.svg"
    ["attic-insulation.jpg"]="placeholder.svg"
    ["commercial-insulation.jpg"]="placeholder.svg"
    ["spray-foam-insulation.jpg"]="placeholder.svg"
    ["insulation-removal.jpg"]="placeholder.svg"
    ["warehouse-insulation.jpg"]="placeholder.svg"
)

for img in "${!IMAGE_PLACEHOLDERS[@]}"; do
    if [ ! -f "$OUTPUT_DIR/$img" ]; then
        cp "$OUTPUT_DIR/${IMAGE_PLACEHOLDERS[$img]}" "$OUTPUT_DIR/$img"
        echo "  Created placeholder: $img"
    fi
done

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Image download complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Images saved to: $OUTPUT_DIR"
echo ""
echo "Total images downloaded:"
ls -1 "$OUTPUT_DIR" | wc -l
echo ""
echo -e "${YELLOW}Note: Some images may need to be manually downloaded or${NC}"
echo -e "${YELLOW}extracted from the PDF files in docs/originals/${NC}"
