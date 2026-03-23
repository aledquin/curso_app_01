import { describe, expect, it } from "vitest";
import { PublicConfigService } from "../src/modules/public-config/public-config.service";

describe("PublicConfigService", () => {
  it("returns supported scheduler presets", () => {
    const service = new PublicConfigService();
    const response = service.getPublicConfig();

    const schedulePresetKeys = response.schedulePresets.map((preset) => preset.key);

    expect(schedulePresetKeys).toContain("daily");
    expect(schedulePresetKeys).toContain("weekdays");
    expect(schedulePresetKeys).toContain("every_n_days");
  });
});
