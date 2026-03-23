# Mobile app scaffold (Flutter)

This folder contains the starter Flutter application for:

- Web
- Android
- iOS

## Why Flutter

Flutter gives one codebase across all three client targets while preserving high-quality UI control for a minimal/luxury visual style.

## Local setup

1. Install Flutter SDK.
2. Run:

   ```bash
   flutter pub get
   flutter test
   flutter run -d chrome
   ```

## Configuration policy

- Keep constants at the top level (`lib/config/app_constants.dart`).
- Avoid hardcoded schedule values or API paths in widgets.
- Environment-specific values should be loaded from build-time variables in future slices.
