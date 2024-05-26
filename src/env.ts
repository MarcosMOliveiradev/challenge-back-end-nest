import { z } from 'zod';

export const envSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.number().optional().default(3339),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_TABLE: z.string(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
});

export type Env = z.infer<typeof envSchema>;
