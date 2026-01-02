#!/usr/bin/env bash
set -e

# Where your exported resume lives (outside the repo)
SRC="$HOME/Downloads/mohit-manna-resume.pdf"

# Where your portfolio expects the resume (inside the repo)
DEST="src/assets/resume.pdf"

echo "Source resume: $SRC"
echo "Destination in repo: $DEST"

if [ ! -f "$SRC" ]; then
  echo "❌ Source resume not found at: $SRC"
  echo "Export your resume as 'latest-resume.pdf' into ~/Documents/Resume/"
  exit 1
fi

echo "➡️  Copying latest resume into repo..."
cp "$SRC" "$DEST"

echo "📦 Adding to git..."
git add "$DEST"

echo "📝 Committing..."
git commit -m "chore: update resume" || echo "No changes to commit (resume is identical)."

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Vercel will auto-redeploy from GitHub."

