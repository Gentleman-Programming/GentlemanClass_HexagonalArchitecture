import { Repository } from "../../app/repository";
import { ExternalUser, Permissions, RepoUser, User, UserPermission } from "../../app/schemas";
import { ForManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements ForManagingUser {
  constructor(private readonly repository: Repository) {}

  async getUser(email: string): Promise<ExternalUser> {
    return this.repository.getUser(email);
  }

  async createUser(user: User): Promise<ExternalUser> {
    return this.repository.createUser(user);
  }

  async getInternalUser(email: string): Promise<RepoUser> {
    return this.repository.getInternalUser(email);
  }
}
