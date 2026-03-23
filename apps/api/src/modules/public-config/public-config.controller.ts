import { Controller, Get, Inject } from "@nestjs/common";
import { PublicConfig } from "@post-scheduler/contracts";
import { PublicConfigService } from "./public-config.service";

@Controller("v1/config/public")
export class PublicConfigController {
  constructor(
    @Inject(PublicConfigService)
    private readonly publicConfigService: PublicConfigService
  ) {}

  @Get()
  getPublicConfig(): PublicConfig {
    return this.publicConfigService.getPublicConfig();
  }
}
