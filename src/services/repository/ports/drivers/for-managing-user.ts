import { ExternalUser, Permissions, RepoUser, User, UserPermission } from "../../app/schemas";

export interface ForManagingUser {
  getUser(email: string): Promise<ExternalUser>;
  createUser(user: User, password: string): Promise<ExternalUser>;
  getInternalUser(email: string): Promise<RepoUser>
}
