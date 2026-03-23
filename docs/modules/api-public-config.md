# Module: Public Config API

## Purpose

Serve frontend-safe runtime configuration to web/mobile clients.

## Endpoint

- `GET /v1/config/public`

## Inputs

None.

## Outputs

```json
{
  "appName": "Post Scheduler",
  "defaultPostingTimeLocal": "00:00",
  "supportedLanguages": ["en"],
  "supportedPostTypes": ["single_image", "carousel"],
  "schedulePresets": [
    { "key": "daily", "label": "Daily", "description": "Post every day at the selected time." },
    { "key": "weekdays", "label": "Selected weekdays", "description": "Post on chosen weekdays only." },
    { "key": "every_n_days", "label": "Every N days", "description": "Post at a selected interval, such as every 2 or 3 days." }
  ],
  "selectableWeekdays": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  "featureFlags": {
    "allowDryRunPublishing": true,
    "enableOptionalAuditLogs": true,
    "enablePolicyAlerts": true
  }
}
```

## Error behavior

- Returns `500` only if internal config parsing fails schema validation.

## Example call

```bash
curl http://localhost:3000/v1/config/public
```

## Implementation files

- `apps/api/src/modules/public-config/public-config.controller.ts`
- `apps/api/src/modules/public-config/public-config.service.ts`
- `packages/contracts/src/public-config.ts`
