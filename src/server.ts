import "dotenv/config";
import { app } from "./app.js";
import { env } from "./config/env.config.js";
import logger from "./config/logger.config.js";

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on("uncaughtException", (err) => {
  logger.fatal(err, "uncaught exception detected");
  server.close(() => {
    process.exit(1);
  });

  // If a graceful shutdown is not achieved after 1 second,
  // shut down the process completely
  setTimeout(() => {
    process.abort();
  }, 1000).unref();
  process.exit(1);
});
