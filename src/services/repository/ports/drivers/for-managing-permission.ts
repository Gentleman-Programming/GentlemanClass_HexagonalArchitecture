import { Permissions, UserPermission } from "../../app/schemas";

export interface ForManagingPermission {
  getUserPermissions(userId: string): Promise<UserPermission>
  createUserPermissions(userId: string, permissions: Permissions): Promise<UserPermission>
}
