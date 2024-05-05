import { RepoUser } from "../../repository/app/schemas";
import { ForRepoQuerying } from "../ports/drivens/for-repo-querying";
import { ForManagingAuthentication } from "../ports/drivers";
import { AuthDetails, Permissions } from "./schemas/auth";

export class ControlPlane implements ForManagingAuthentication {
  constructor(
    private readonly repoQuerier: ForRepoQuerying,
  ) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    let user: RepoUser

    try {
      user = await this.repoQuerier.getUser(email);
    } catch (error) {
      // acá podría hacer una validación según el tipo de error
      throw new Error("Wrong email");
    }

    if (password !== user.password) {
      throw new Error("Wrong password");
    }

    return { token: "token", refreshToken: "refreshToken" };
  }

  async getPermissions(userId: string): Promise<Permissions> {
    const userPermissions = await this.repoQuerier.getPermissions(userId);

    const permissions = {
      admin: userPermissions.admin,
      user: userPermissions.user,
    };

    return permissions;
  }
}
