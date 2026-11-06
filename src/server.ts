import "dotenv/config";

import { app } from "./app.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";

const PORT = env.PORT;
const server = app.listen(PORT, () => {
	logger.info(`API running at http://localhost:${PORT}`);
});

const gracefulShutdown = (signal: string) => {
	logger.info(`Received ${signal}. Starting graceful shutdown...`);

	server.close(() => {
		logger.info("HTTP server closed successfully.");
		process.exit(0);
	});

	setTimeout(() => {
		logger.error(
			"Could not close connections in time, forcefully shutting down",
		);
		process.exit(1);
	}, 10000);
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
