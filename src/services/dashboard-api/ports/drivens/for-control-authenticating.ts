import { AuthDetails, Permissions } from "../../app/schemas";

export interface ForControlAuthenticating {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(userId: string): Promise<Permissions>;
}
