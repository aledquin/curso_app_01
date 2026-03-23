# Delivery guide: Web, Android, and iOS

## Web delivery

1. Build Flutter web app:
   - `flutter build web`
2. Deploy static output to hosting provider (Cloudflare Pages, Vercel static, Firebase Hosting, S3 + CDN).
3. Configure environment variables at deploy time.

## Android (Google Play)

1. Create Google Play Console account.
2. Configure Android package id, app signing, and release keystore.
3. Build AAB:
   - `flutter build appbundle --release`
4. Upload to internal testing track first.
5. Validate policy declarations and Data Safety form.
6. Promote to production.

## iOS (Apple App Store)

1. Create Apple Developer account.
2. Configure Bundle Identifier, signing certificates, and provisioning profiles.
3. Build iOS release:
   - `flutter build ipa --release`
4. Upload via Xcode Organizer or Transporter.
5. Complete App Privacy details and submission metadata.
6. Submit for review and release.

## Release workflow recommendation

1. Backend and mobile version tagging from CI.
2. Run full automated test suite before release cut.
3. Publish to internal/beta channels first.
4. Roll out gradually and monitor crash/error telemetry.
