import path from "node:path";
import url from "node:url";

import dotenv from "dotenv";

const filePath = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(filePath);

dotenv.config({
    path: path.join(
        __dirname,
        "..",
        "..",
        `.env.${process.env.NODE_ENV}.local`,
    ),
});

const {
    PORT,
    NODE_ENV,
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
} = process.env;

export const env = {
    NODE_ENV,
    PORT,
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
};
