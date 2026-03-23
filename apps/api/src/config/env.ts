import { APP_DEFAULTS } from "./app.constants";

type EnvironmentValue = string | undefined;

const APP_NAME_ENV_KEY = "APP_NAME";
const PORT_ENV_KEY = "PORT";
const DEFAULT_POSTING_TIME_ENV_KEY = "DEFAULT_POSTING_TIME_LOCAL";

function resolveEnvValue(envKey: string): EnvironmentValue {
  return process.env[envKey];
}

function parsePortValue(rawPort: EnvironmentValue): number {
  if (!rawPort) {
    return APP_DEFAULTS.port;
  }

  const parsedPort = Number(rawPort);
  if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
    throw new Error(`Invalid ${PORT_ENV_KEY} value: ${rawPort}`);
  }

  return parsedPort;
}

export const EnvConfig = {
  appName: resolveEnvValue(APP_NAME_ENV_KEY) ?? APP_DEFAULTS.appName,
  port: parsePortValue(resolveEnvValue(PORT_ENV_KEY)),
  defaultPostingTimeLocal:
    resolveEnvValue(DEFAULT_POSTING_TIME_ENV_KEY) ??
    APP_DEFAULTS.defaultPostingTimeLocal
};
