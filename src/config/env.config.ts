import { envSchema } from "../validators/env.schema.js";

const parsedData = envSchema.safeParse(process.env);
if (!parsedData.success) {
  throw new Error("Env variables not set properly");
}

export const env = parsedData.data;
