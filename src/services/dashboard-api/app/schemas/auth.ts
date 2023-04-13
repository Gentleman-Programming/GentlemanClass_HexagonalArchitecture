import { z } from "zod";

export const AuthDetailsSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
});

export const PermissionsSchema = z.object({
  admin: z.boolean(),
  user: z.boolean(),
});

export type AuthDetails = z.infer<typeof AuthDetailsSchema>;
export type Permissions = z.infer<typeof PermissionsSchema>;