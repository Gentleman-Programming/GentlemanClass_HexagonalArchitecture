import { ForMonitoring } from "../ports/drivens";
import { ForManagingUser } from "../ports/drivers";
import { ForManagingPermission } from "../ports/drivers/for-managing-permission";
import {
  ExternalUser,
  Permissions,
  RepoUser,
  User,
  UserPermission,
} from "./schemas";

export class Repository implements ForManagingUser, ForManagingPermission {
  private userList: RepoUser[] = [];
  private userPermissionList: UserPermission[] = [];
  constructor(private readonly logger: ForMonitoring) {}

  async getUser(email: string): Promise<ExternalUser> {
    const user = this.userList.find((user) => user.email === email);
    if (!user) {
      this.logger.log("GetUser", "User not found");
      throw new Error("User not found");
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async createUser(user: User): Promise<ExternalUser> {
    const userExists = this.userList.find((user) => user.email === user.email);
    if (userExists) {
      this.logger.log("CreateUser", "User already exists");
      throw new Error("User already exists");
    }
    const newUser = {
      ...user,
      id: String(this.userList.length + 1),
    };

    this.userList.push(newUser);
    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  async getInternalUser(email: string): Promise<RepoUser> {
    const user = this.userList.find((user) => user.email === email);
    if (!user) {
      this.logger.log("GetInternalUser", "User not found");
      throw new Error("User not found");
    }

    return user;
  }

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
      id: String(this.userList.length + 1),
      userId,
      admin: permissions.admin,
      user: permissions.user,
    };

    this.userPermissionList.push(newUserPermission);

    return newUserPermission;
  }
}
