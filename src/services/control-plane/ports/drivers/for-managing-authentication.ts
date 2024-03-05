import { AuthDetails, Permissions } from "../../app/schemas/auth";

export interface ForManagingAuthentication {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(userId: string): Promise<Permissions>;
}
