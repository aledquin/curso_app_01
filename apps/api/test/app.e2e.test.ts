import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { describe, afterEach, expect, it } from "vitest";
import { createTestApp } from "./test-app.factory";

const HEALTH_ROUTE = "/health";
const PUBLIC_CONFIG_ROUTE = "/v1/config/public";

describe("API routes", () => {
  let app: NestFastifyApplication | undefined;

  afterEach(async () => {
    if (app) {
      await app.close();
      app = undefined;
    }
  });

  it("GET /health returns service status", async () => {
    app = await createTestApp();
    const response = await app.inject({
      method: "GET",
      url: HEALTH_ROUTE
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      status: "ok",
      service: "api"
    });
  });

  it("GET /v1/config/public returns the public configuration", async () => {
    app = await createTestApp();
    const response = await app.inject({
      method: "GET",
      url: PUBLIC_CONFIG_ROUTE
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      appName: "Post Scheduler",
      defaultPostingTimeLocal: "00:00",
      supportedLanguages: ["en"]
    });
  });
});
