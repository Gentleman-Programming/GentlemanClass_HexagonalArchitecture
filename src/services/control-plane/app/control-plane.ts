import { ForManagerAuthentication } from "../ports/drivers";
import { ForMonitoring } from '../ports/drivens/for-monitoring';
import { AuthDetails,Permissions } from "./schemas";
//Mi hexagono que tiene implementado los puertos de los driveR, en este caso es solo uno pero podrian ser mas
export class ControlPlane implements ForManagerAuthentication{
     //el Constructor los DriverN del puerto, osea que son los recurson necesario para que mi hexagono funcione
     constructor(private readonly forMonitoring: ForMonitoring){}
     
     //Los metodos de mi hexagono que vienen de los driveR de los pruertos
     async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
          
          // const authDetails = await this.
          return Promise.resolve({token:"123", refreshToken:"1234"})
     }
     async getPermissions(email: string, password: string): Promise<Permissions> {
          return Promise.resolve({admin:true,user:true})
     }
}