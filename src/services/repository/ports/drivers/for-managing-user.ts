import { ExternalUser, User } from "../../app/schemas";

export interface ForManagingUser {
  getUser(email: string): Promise<ExternalUser>;
  createUser(user: User, password: string): Promise<ExternalUser>;
}
