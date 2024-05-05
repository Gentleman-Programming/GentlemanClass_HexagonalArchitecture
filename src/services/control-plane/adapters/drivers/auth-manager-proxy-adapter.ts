import { ControlPlane } from "../../app/control-plane";
import { AuthDetails, Permissions } from "../../app/schemas/auth";
import { ForManagingAuthentication } from "../../ports/drivers";

export class AuthManagerProxyAdapter implements ForManagingAuthentication {
  constructor(private readonly controlPlane: ControlPlane) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.controlPlane.getAuthDetails(email, password);
  }

  async getPermissions(userId: string): Promise<Permissions> {
    return this.controlPlane.getPermissions(userId);
  }
}
