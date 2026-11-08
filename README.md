# Glide Car Wash — app concept

An iOS-style redesign of a car wash membership app: sign-up, wash pass with QR code, Add to Wallet, locations, plans and account. It is a clickable prototype; nothing is sent to a server.

**Live app:** https://yaksbbgtr.github.io/yaksbbgtr-glide-wash-/

## Put it on your phone
1. In this repository: **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
2. After a minute, open the live link above.
3. iPhone: open it in Safari, tap **Share → Add to Home Screen**. Android: open it in Chrome and tap **Install app**.

## Files
- `index.html` — the whole app.
- `manifest.webmanifest` — app name, icon and full-screen setting for home-screen installs.
- `sw.js` — lets the app open without internet.
- `icon-*.png`, `apple-touch-icon.png` — app icons.

To rebrand, edit the `BRAND` line near the top of the script in `index.html`.
