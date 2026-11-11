#!/usr/bin/env bash
set -e

echo "=== JCBilling Android APK Local Build Helper ==="
echo "1. Building web production bundle with Vite..."
npm run build

echo "2. Syncing assets and plugins to Android project via Capacitor..."
npx cap sync android

echo "3. Compiling Android Debug APK via Gradle..."
cd android
chmod +x gradlew
./gradlew assembleDebug

echo "=== SUCCESS! ==="
echo "Debug APK built at: android/app/build/outputs/apk/debug/app-debug.apk"
