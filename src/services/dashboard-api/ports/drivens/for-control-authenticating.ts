import { AuthDetails, Permissions } from "../../app/schemas";

export interface ForControlAuthenticating {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(email: string, password: string): Promise<Permissions>;
}
