import { ForAuthenticatingUser } from "../ports/drivers";
import { AuthDetails, Permissions } from "./shemas";
import { ForAuthenticating } from "../ports/drivens";

export class ControlPlane implements ForAuthenticatingUser {
  constructor(private readonly handlerAuthorization: ForAuthenticating) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.handlerAuthorization.getAuthDetails(email, password);
  }
  async getPermissions(email: string, password: string): Promise<Permissions> {
    return this.handlerAuthorization.getPermissions(email, password);
  }
}
