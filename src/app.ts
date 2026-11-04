import type { Application, NextFunction, Request, Response } from "express";
import express from "express";

import type { HttpError } from "http-errors";

export const app: Application = express();

app.use("/health", (_, res) => {
	res.status(200).json({
		message: "Welcome to auth service",
	});
});

app.use((error: HttpError, _: Request, res: Response, __: NextFunction) => {
	const statusCode = error.statusCode || 500;

	res.status(statusCode).json({
		errors: [
			{
				message: error.message,
				type: error.name,
				information: "",
				path: "",
			},
		],
	});
});
