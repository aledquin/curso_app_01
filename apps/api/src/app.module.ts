import { Module } from "@nestjs/common";
import { HealthModule } from "./modules/health/health.module";
import { PublicConfigModule } from "./modules/public-config/public-config.module";

@Module({
  imports: [HealthModule, PublicConfigModule]
})
export class AppModule {}
