import "reflect-metadata";

import type { Application, NextFunction, Request, Response } from "express";
import express from "express";

import type { HttpError } from "http-errors";

import authRoutes from "./routes/auth.routes.js";

export const app: Application = express();

app.use("/health", (_, res) => {
    res.status(200).json({
        message: "Welcome to auth service",
    });
});

// Routes
app.use("/api/v1/auth", authRoutes);

// Error-Handler
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
