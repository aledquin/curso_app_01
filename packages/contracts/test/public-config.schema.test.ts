import { describe, expect, it } from "vitest";
import { PublicConfigSchema } from "../src/public-config";

const VALID_PUBLIC_CONFIG_FIXTURE = {
  appName: "Post Scheduler",
  defaultPostingTimeLocal: "00:00",
  supportedLanguages: ["en"],
  supportedPostTypes: ["single_image", "carousel"],
  schedulePresets: [
    {
      key: "daily",
      label: "Daily",
      description: "Post every day."
    }
  ],
  selectableWeekdays: [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ],
  featureFlags: {
    allowDryRunPublishing: true,
    enableOptionalAuditLogs: true,
    enablePolicyAlerts: true
  }
};

describe("PublicConfigSchema", () => {
  it("accepts valid payload", () => {
    const parsed = PublicConfigSchema.safeParse(VALID_PUBLIC_CONFIG_FIXTURE);

    expect(parsed.success).toBe(true);
  });

  it("rejects invalid posting time format", () => {
    const parsed = PublicConfigSchema.safeParse({
      ...VALID_PUBLIC_CONFIG_FIXTURE,
      defaultPostingTimeLocal: "0:00"
    });

    expect(parsed.success).toBe(false);
  });
});
