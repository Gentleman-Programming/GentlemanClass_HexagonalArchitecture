import { AuthDetails,Permissions } from "../../app/schemas";

//Los driveR de los Puertos son los que describen mi hexagono, mis CONTRATOS
//en este caso el hexagono de control plane tiene dar detalles de autenticacion y los permisos de los usuarios
export interface ForManagerAuthentication{
     getAuthDetails(email: string, password: string): Promise<AuthDetails>;
     getPermissions(email: string, password: string): Promise<Permissions>;
}