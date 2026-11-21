#!/bin/sh
# Vercel build command for this site (Project Settings → Build Command: sh android/tools/vercel-build.sh).
# Every deploy refreshes the Android live-update bundle (app/www/ and app/update.json) from the index.html
# and pdf/ being deployed, so installed apps always pick up the latest site without a new APK.
# fontTools is pinned so font subsets (and their hashes) stay identical from deploy to deploy.
# It never fails the deploy: if anything goes wrong the committed bundle is served as it is.
set -u
command -v python3 >/dev/null 2>&1 || { echo "python3 missing: serving the committed app bundle"; exit 0; }
python3 -c "import fontTools,sys;sys.exit(fontTools.version!='4.67.0')" 2>/dev/null ||
  python3 -m pip install -q --disable-pip-version-check fonttools==4.67.0 2>/dev/null ||
  python3 -m pip install -q --disable-pip-version-check --user fonttools==4.67.0 2>/dev/null ||
  python3 -m pip install -q --disable-pip-version-check --break-system-packages fonttools==4.67.0 2>/dev/null ||
  echo "fontTools not installed: previous font subsets will be reused"
python3 android/tools/make_web.py . --site || echo "app update bundle not refreshed: serving the committed one"
exit 0
