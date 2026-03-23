import { Controller, Get } from "@nestjs/common";

type HealthResponse = {
  status: "ok";
  service: string;
  timestampIso: string;
};

const HEALTH_STATUS_VALUE = "ok";
const SERVICE_NAME = "api";

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return {
      status: HEALTH_STATUS_VALUE,
      service: SERVICE_NAME,
      timestampIso: new Date().toISOString()
    };
  }
}
