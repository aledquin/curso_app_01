import { Injectable } from "@nestjs/common";
import {
  PublicConfig,
  PublicConfigSchema
} from "@post-scheduler/contracts";
import { APP_DEFAULTS, FEATURE_FLAGS } from "../../config/app.constants";
import { EnvConfig } from "../../config/env";

@Injectable()
export class PublicConfigService {
  getPublicConfig(): PublicConfig {
    const response = {
      appName: EnvConfig.appName,
      defaultPostingTimeLocal: EnvConfig.defaultPostingTimeLocal,
      supportedLanguages: [...APP_DEFAULTS.supportedLanguages],
      supportedPostTypes: [...APP_DEFAULTS.supportedPostTypes],
      schedulePresets: [...APP_DEFAULTS.schedulePresets],
      selectableWeekdays: [...APP_DEFAULTS.selectableWeekdays],
      featureFlags: {
        ...FEATURE_FLAGS
      }
    };

    return PublicConfigSchema.parse(response);
  }
}
