import { Repository } from "../../app/repository";
import { Permissions, UserPermission } from "../../app/schemas";
import { UserPermissionRepository } from "../../app/user-permission-repository";
import { ForManagingPermission } from "../../ports/drivers/for-managing-permission";

export class UserPermissionManagerProxy implements ForManagingPermission {
  constructor(private readonly repository: UserPermissionRepository) {}

  async getUserPermissions(userId: string): Promise<UserPermission> {
    return this.repository.getUserPermissions(userId)
  }

  async createUserPermissions(userId: string, permissions: Permissions): Promise<UserPermission> {
    return this.repository.createUserPermissions(userId, permissions)
  }
}
