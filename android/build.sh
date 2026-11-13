#!/usr/bin/env bash
# Build the PYQ Bank Android app (app/PYQ-Bank.apk) from this repo, without Gradle or the Android SDK.
#
#   KEYSTORE=path/to/pyqbank-release.p12 KEYPASS=... android/build.sh
#
# Needs: JDK 17+, git, python3 with `cryptography` and `fonttools`, Inter fonts (fonts-inter).
# Toolchain (downloaded once into $TOOLS, default ~/.cache/pyqbank-tools):
#   android.jar   Sable/android-platforms (android-34)
#   dx            AOSP dalvik/dx, compiled from source
#   APKEditor     REAndroid/APKEditor (encodes manifest + resources, writes the APK)
# Signing: android/tools/apkpack.py (zip alignment + APK Signature Scheme v2).
# The signing key is NOT in the repo. Every update must use the same key.
set -euo pipefail
cd "$(dirname "$0")/.."
REPO=$PWD
TOOLS=${TOOLS:-$HOME/.cache/pyqbank-tools}
: "${KEYSTORE:?set KEYSTORE to the .p12 signing key}" "${KEYPASS:?set KEYPASS}"
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
mkdir -p "$TOOLS"

# ---- toolchain -------------------------------------------------------------
if [ ! -f "$TOOLS/android.jar" ]; then
  git clone -q --depth 1 --filter=blob:none --no-checkout https://github.com/Sable/android-platforms "$TOOLS/ap"
  git -C "$TOOLS/ap" checkout -q HEAD -- android-34/android.jar
  cp "$TOOLS/ap/android-34/android.jar" "$TOOLS/android.jar"
fi
if [ ! -d "$TOOLS/dx" ]; then
  git clone -q --depth 1 --filter=blob:none --no-checkout https://github.com/aosp-mirror/platform_dalvik "$TOOLS/dalvik"
  git -C "$TOOLS/dalvik" sparse-checkout set dx && git -C "$TOOLS/dalvik" checkout -q HEAD
  mkdir -p "$TOOLS/dx"
  javac -nowarn -encoding UTF-8 -d "$TOOLS/dx" $(find "$TOOLS/dalvik/dx/src" -name '*.java')
fi
if [ ! -d "$TOOLS/apked/out" ]; then
  git clone -q --depth 1 https://github.com/REAndroid/APKEditor "$TOOLS/apked"
  mkdir -p "$TOOLS/apked/out"
  javac -nowarn -d "$TOOLS/apked/out" -cp "$TOOLS/apked/libs/*" $(find "$TOOLS/apked/src" -name '*.java')
  cp -r "$TOOLS/apked/src/main/resources/." "$TOOLS/apked/out/"
fi

# ---- code ------------------------------------------------------------------
mkdir -p "$WORK/classes"
javac -source 8 -target 8 -nowarn -Xlint:-options -bootclasspath "$TOOLS/android.jar" \
  -d "$WORK/classes" $(find android/app/java -name '*.java')
mkdir -p "$WORK/proj/dex"
java -cp "$TOOLS/dx" com.android.dx.command.Main --dex --min-sdk-version=24 \
  --output="$WORK/proj/dex/classes.dex" "$WORK/classes"

# ---- manifest, resources, web bundle ---------------------------------------
cp android/app/AndroidManifest.xml "$WORK/proj/"
mkdir -p "$WORK/proj/resources/package_1" "$WORK/proj/root/assets"
cp -r android/app/res "$WORK/proj/resources/package_1/res"
python3 android/tools/make_web.py "$REPO" "$WORK/proj/root/assets/www"

# ---- package + sign --------------------------------------------------------
java -cp "$TOOLS/apked/out:$TOOLS/apked/libs/*" com.reandroid.apkeditor.Main \
  b -t xml -i "$WORK/proj" -o "$WORK/unsigned.apk" -f
mkdir -p app
python3 android/tools/apkpack.py "$WORK/unsigned.apk" app/PYQ-Bank.apk "$KEYSTORE" "$KEYPASS"
ls -la app/PYQ-Bank.apk
