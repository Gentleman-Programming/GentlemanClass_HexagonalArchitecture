import { userManagerProxy, userPermissionManagerProxy } from "../../../repository/app/composition-root";
import { RepoUser } from "../../../repository/app/schemas";
import { Permissions } from "../../app/schemas/auth";
import { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStubAdapter implements ForRepoQuerying {
  async getUser(email: string): Promise<RepoUser> {
    const user = userManagerProxy.getInternalUser(email)

    return user;
  }

  async getPermissions(userId: string): Promise<Permissions> {
    const userPermissions = await userPermissionManagerProxy.getUserPermissions(userId)

    return {
      admin: userPermissions.admin,
      user: userPermissions.user
    }
  }
}
