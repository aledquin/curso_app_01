import { z } from "zod";

export const WEEKDAY_VALUES = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
] as const;

export const PublicConfigSchema = z.object({
  appName: z.string().min(1),
  defaultPostingTimeLocal: z.string().regex(/^\d{2}:\d{2}$/),
  supportedLanguages: z.array(z.string().min(2)),
  supportedPostTypes: z.array(z.enum(["single_image", "carousel"])),
  schedulePresets: z.array(
    z.object({
      key: z.string().min(1),
      label: z.string().min(1),
      description: z.string().min(1)
    })
  ),
  selectableWeekdays: z.array(z.enum(WEEKDAY_VALUES)),
  featureFlags: z.object({
    allowDryRunPublishing: z.boolean(),
    enableOptionalAuditLogs: z.boolean(),
    enablePolicyAlerts: z.boolean()
  })
});

export type PublicConfig = z.infer<typeof PublicConfigSchema>;
