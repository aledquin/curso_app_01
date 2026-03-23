export const APP_DEFAULTS = {
  appName: "Post Scheduler",
  port: 3000,
  defaultPostingTimeLocal: "00:00",
  supportedLanguages: ["en"],
  supportedPostTypes: ["single_image", "carousel"] as const,
  selectableWeekdays: [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ] as const,
  schedulePresets: [
    {
      key: "daily",
      label: "Daily",
      description: "Post every day at the selected time."
    },
    {
      key: "weekdays",
      label: "Selected weekdays",
      description: "Post on chosen weekdays only."
    },
    {
      key: "every_n_days",
      label: "Every N days",
      description: "Post at a selected interval, such as every 2 or 3 days."
    }
  ]
} as const;

export const FEATURE_FLAGS = {
  allowDryRunPublishing: true,
  enableOptionalAuditLogs: true,
  enablePolicyAlerts: true
} as const;
