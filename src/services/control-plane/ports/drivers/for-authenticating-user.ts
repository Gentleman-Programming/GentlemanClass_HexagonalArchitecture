import { AuthDetails, Permissions } from "../../app/shemas";

export interface ForAuthenticatingUser {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(email: string, password: string): Promise<Permissions>;
}
