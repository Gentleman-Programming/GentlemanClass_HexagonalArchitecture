import { ControlPlane } from '../../app/control-plane'
import { AuthDetails, Permissions } from '../../app/schemas'
import { ForManagingAuthDetails } from '../../ports/drivers/for-managing-auth-details'

export class AuthDetailsProxy implements ForManagingAuthDetails {
  constructor(private readonly controlPlane: ControlPlane) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.controlPlane.getAuthDetails(email, password)
  }

  async getPermissions(email: string): Promise<Permissions> {
    return this.controlPlane.getPermissions(email)
  }
}
