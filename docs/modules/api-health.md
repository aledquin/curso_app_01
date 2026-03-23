# Module: Health API

## Purpose

Return a lightweight service health payload for uptime checks and smoke tests.

## Endpoint

- `GET /health`

## Inputs

None.

## Outputs

```json
{
  "status": "ok",
  "service": "api",
  "timestampIso": "2026-03-23T00:00:00.000Z"
}
```

## Errors

- None expected under normal runtime.

## Example call

```bash
curl http://localhost:3000/health
```
