import { Permissions } from "./auth";

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
  permissions: Permissions;
}

export interface User extends Pick<AuthenticatedUser, "email" | "name"> {
  password: string;
}
