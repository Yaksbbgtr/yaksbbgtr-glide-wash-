# Mr. Touchless — app concept

An unofficial iOS-style redesign concept for the Mr. Touchless Car Wash app (not affiliated with or endorsed by Mr. Touchless): sign-up, wash pass with QR code, Add to Wallet, locations, plans and account. It is a clickable prototype; nothing is sent to a server.

**Live app:** https://yaksbbgtr.github.io/yaksbbgtr-glide-wash-/

## Put it on your phone
1. In this repository: **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
2. After a minute, open the live link above.
3. iPhone: open it in Safari, tap **Share → Add to Home Screen**. Android: open it in Chrome and tap **Install app**.

## Files
- `index.html` — the whole app.
- `manifest.webmanifest` — app name, icon and full-screen setting for home-screen installs.
- `sw.js` — lets the app open without internet.
- `icon-light-*.png`, `icon-dark-*.png` — app icons for light and dark mode (1024 px masters included).

The card step only accepts the test card 4242 4242 4242 4242; nothing is sent or saved.
