#!/bin/bash
# Update villa count from 40 to 33 across all files

find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.md" -o -name "*.txt" \) -exec sed -i \
  -e 's/\b40 villas\b/33 villas/g' \
  -e 's/\b40 families\b/33 families/g' \
  -e 's/\b40 standalone\b/33 standalone/g' \
  -e 's/\b40 luxury villas\b/33 luxury villas/g' \
  -e 's/"40".*"Villas"/"33", label: "Villas"/g' \
  -e 's/value: "40"/value: "33"/g' \
  {} \;

echo "✅ Updated villa count from 40 to 33"
