import { ControlPlane } from '../../app/control-plane';
import { AuthDetails,Permissions } from '../../app/schemas';
import { ForManagerAuthentication } from '../../ports/drivers';

export class ManagerAuthenticationProxyAdapter implements ForManagerAuthentication{
     constructor(private readonly controlPlane: ControlPlane){}
     async getAuthDetails(email: string, password: string): Promise<AuthDetails>{
          return this.controlPlane.getAuthDetails(email,password);
     }
     async getPermissions(email: string, password: string): Promise<Permissions>{
          return this.controlPlane.getPermissions(email,password);
     }
}