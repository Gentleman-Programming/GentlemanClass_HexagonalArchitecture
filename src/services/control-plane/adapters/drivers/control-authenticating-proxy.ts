import { ControlPlane } from "../../app/control-plane";
import { AuthDetails, Permissions } from "../../app/shemas";
import { ForAuthenticatingUser } from "../../ports/drivers";

export class ControlAuthenticatingProxyAdapter
  implements ForAuthenticatingUser
{
  constructor(private readonly controlPlane: ControlPlane) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.controlPlane.getAuthDetails(email, password);
  }
  async getPermissions(email: string, password: string): Promise<Permissions> {
    return this.controlPlane.getPermissions(email, password);
  }
}
