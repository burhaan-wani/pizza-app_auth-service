import pino from "pino";

const levels = {
  emerg: 80,
  alert: 70,
  crit: 60,
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
  fatal: 90,
};

const logger = pino({
  level: process.env.PINO_LOG_LEVEL || "info",
  customLevels: levels,
  useOnlyCustomLevels: true,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    bindings: (bindings) => {
      return { pid: bindings.pid, host: bindings.hostname };
    },
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
});

export default logger;
