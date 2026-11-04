import "dotenv/config";

import { app } from "./app.js";

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
	console.log(`API running at http://localhost:${PORT}`);
});

const gracefulShutdown = (signal: string) => {
	console.log(`Received ${signal}. Starting graceful shutdown...`);

	server.close(() => {
		console.log("HTTP server closed successfully.");
		process.exit(0);
	});

	setTimeout(() => {
		console.error(
			"Could not close connections in time, forcefully shutting down",
		);
		process.exit(1);
	}, 10000);
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
