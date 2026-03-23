# Post Scheduler

Config-first monorepo for a multi-platform Instagram scheduling product.

## Products in scope

- Web app (Flutter Web)
- Android app (Flutter Android)
- iOS app (Flutter iOS)
- Backend API and background scheduler services

## Repository layout

```text
/apps
  /api               # NestJS backend (first working slice)
  /mobile_flutter    # Flutter app scaffold (web + android + ios)
/packages
  /contracts         # Shared schemas/contracts
/docs
  /modules           # Per-module docs (inputs/outputs/errors/examples)
  /diagrams          # Mermaid + SVG flow diagrams
```

## Current milestone

This initial commit includes:

- NestJS API scaffold with config-driven defaults
- Health endpoint + public config endpoint
- Unit and integration tests for backend/core contracts
- CI workflow for lint + tests
- Step-by-step Meta/Instagram setup guide
- App Store and Play Store delivery guide

## Quick start

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run tests:

   ```bash
   pnpm test
   ```

3. Run backend locally:

   ```bash
   pnpm --filter @post-scheduler/api dev
   ```

4. Open API:
   - `GET http://localhost:3000/health`
   - `GET http://localhost:3000/v1/config/public`
