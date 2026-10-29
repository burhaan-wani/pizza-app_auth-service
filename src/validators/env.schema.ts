import { z } from "zod";

export const envSchema = z.object({
  PORT: z
    .string()
    .default("3001")
    .transform((val) => Number(val)),
  NODE_ENV: z.string().pipe(z.enum(["development", "production"])),
});
