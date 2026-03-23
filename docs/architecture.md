# Architecture overview

## Objective

Build a multi-tenant product where users can connect Instagram accounts, generate captions/hashtags, and auto-publish on configurable schedules.

## High-level components

1. **Flutter client**
   - Web + Android + iOS in a single codebase
2. **API service (NestJS)**
   - Auth, profile preferences, schedule rules, queue management
3. **Worker service (future slice)**
   - Background publishing, retries, idempotency
4. **Storage**
   - PostgreSQL (transactional data), Redis (jobs/queues), S3-compatible media storage

## System flow

```mermaid
flowchart LR
  A[User Onboarding] --> B[Instagram OAuth]
  B --> C[Preference Questions]
  C --> D[Photo Upload]
  D --> E[AI Caption + Hashtag Generator]
  E --> F[Policy Checker]
  F --> G[Publish Queue]
  G --> H[Scheduler Worker]
  H --> I[Instagram Graph API]
  I --> J[History and Metrics]
  H --> K[Retry and Dead Letter]
```

## Config-first principles

- No business constants are hardcoded in controllers.
- Defaults and feature flags are centralized in config modules.
- Public configuration is exposed via an API endpoint to avoid duplicate constants across clients.
