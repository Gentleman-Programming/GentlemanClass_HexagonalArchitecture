import { ForControlAuthenticating } from "../../ports/drivens";
import { AuthDetails, Permissions } from "../../app/schemas";

const authDetailsMock: AuthDetails = {
  token: "token",
  refreshToken: "refreshToken",
};

const permissionsMock: Permissions = {
  admin: true,
  user: true,
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }

  getPermissions(_email: string, _password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
