import { ForMonitoring } from "../ports/drivens";
import { ForManagingPermission } from "../ports/drivers/for-managing-permission";
import {
  Permissions,
  UserPermission,
} from "./schemas";

export class UserPermissionRepository implements ForManagingPermission {
  private userPermissionList: UserPermission[] = [];
  constructor(private readonly logger: ForMonitoring) {}

  async getUserPermissions(userId: string): Promise<UserPermission> {
    const userPermission = this.userPermissionList.find(
      (userPermission) => userPermission.userId === userId
    );

    if (!userPermission) {
      this.logger.log("GetUserPermissions", "Permissions not found");
      throw new Error("Permissions not found");
    }

    return userPermission;
  }

  async createUserPermissions(
    userId: string,
    permissions: Permissions
  ): Promise<UserPermission> {
    const newUserPermission: UserPermission = {
      id: crypto.randomUUID(),
      userId,
      admin: permissions.admin,
      user: permissions.user,
    };

    this.userPermissionList.push(newUserPermission);

    return newUserPermission;
  }
}
