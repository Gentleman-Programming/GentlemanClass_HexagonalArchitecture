import { ForLogging } from "../ports/drivens/for-logging";
import { ForRepoQuerying } from "../ports/drivens/for-repo-querying";
import { ForManagingAuthentication } from "../ports/drivers";
import { AuthDetails, Permissions } from "./schemas/auth";

export class ControlPlane implements ForManagingAuthentication {
  constructor(
    private readonly repoQuerier: ForRepoQuerying,
    private readonly logger: ForLogging
  ) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    const user = await this.repoQuerier.getUser(email);

    if (!user) {
      this.logger.log("GetAuthDetails", "Wrong email");
      throw new Error("Wrong email");
    }

    if (password !== user.password) {
      this.logger.log("GetAuthDetails", "Wrong password");
      throw new Error("Wrong password");
    }

    return { token: "token", refreshToken: "refreshToken" };
  }

  async getPermissions(userId: string): Promise<Permissions> {
    const userPermissions = await this.repoQuerier.getPermissions(userId);

    if (!userPermissions) {
      this.logger.log("GetPermissions", "Permissions not found");
      throw new Error("Permissions not found");
    }

    const permissions = {
      admin: userPermissions.admin,
      user: userPermissions.user,
    };

    return permissions;
  }
}
