import { User } from "./../ports/drivers/for-authenticating";
import { ForRepoQuerying } from "../ports/drivens";
import { AuthenticatedUser, ForAuthenticating } from "../ports/drivers";
import { ForControlAuthenticating } from "./../ports/drivens/for-control-authenticating";

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password
    );
    const user = await this.repoQuerier.getUser(email);
    const result = {
      ...user,
      ...authDetails,
      ...permissions,
    };

    console.log("LOGIN", result);

    return result;
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user, password);
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password
    );

    const result = {
      ...newUser,
      ...authDetails,
      ...permissions,
    };

    console.log("REGISTER", result);

    return result;
  }
}
