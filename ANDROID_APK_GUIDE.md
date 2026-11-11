# JCBilling Android APK & Tablet Compilation Guide

This guide explains how to compile, build, and run the **JCBilling** Android APK on smartphones and tablets.

---

## 1. Automated GitHub APK Compiler (Recommended)

A pre-configured, production-ready GitHub Actions workflow is included at `.github/workflows/build-apk.yml`. You can compile the Android `.apk` directly in the cloud without installing Android Studio or the Android SDK on your local computer.

### Steps to compile via GitHub:
1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: Android and Tablet optimization with Capacitor"
   git push origin main
   ```
2. **Access the GitHub Actions Compiler**:
   - Go to your repository on [github.com](https://github.com).
   - Click on the **Actions** tab at the top.
   - In the left sidebar, click on **Build Android APK**.
3. **Manual Trigger (Optional)**:
   - Click the **Run workflow** dropdown on the right.
   - Choose `debug`, `release`, or `both` and click **Run workflow**.
4. **Download the Compiled APK**:
   - Once the build finishes (typically 2–3 minutes), click on the completed workflow run.
   - Scroll down to the **Artifacts** section at the bottom.
   - Click **JCBilling-Android-Debug-APK** to download the ZIP file containing `app-debug.apk`.
   - Transfer `app-debug.apk` to your Android phone or tablet (via WhatsApp, Google Drive, Telegram, or USB cable) and tap to install!

---

## 2. Local Build Instructions (Optional)

If you have Java 17 and Android SDK installed locally, you can build the APK on your machine:

```bash
# 1. Build web assets and sync to native Android platform
npm run build
npx cap sync android

# 2. Compile Debug APK via Gradle
cd android
chmod +x gradlew
./gradlew assembleDebug

# Output location:
# android/app/build/outputs/apk/debug/app-debug.apk
```

Or simply run the helper script:
```bash
./scripts/build-android-apk.sh
```

---

## 3. Mobile Phone & Tablet Redesign Features

- **Thumb-Zone Navigation**: A dedicated 4-tab bottom navigation bar (`P Manifest`, `P + D`, `Final Bill`, `Cloud Sync`) designed for one-handed operation on Android smartphones.
- **Android Safe-Area Inset Handling**: Full support for status bar notches, hole-punch cameras, and gesture navigation bars (`pt-safe`, `pb-safe`, `viewport-fit=cover`).
- **Native Android Hardware / Gesture Back Button**:
  - Tapping Android's back gesture or physical back key dismisses open modals, cameras, and crop tools in order of priority.
  - Exits the Billing Editor back to the Dashboard safely without losing drafts.
  - Exits subfolders back to the main directory.
- **Tablet Split & Expansive Layout**: Scales fluidly across 7" to 12.9" Android tablets with generous spacing, multi-column density, and rapid billing tools.
- **Camera OCR & Offline Sync**: 100% of existing features (Gemini AI OCR, Chunking Engine, IndexedDB persistence, Firestore cloud sync) remain fully intact.
