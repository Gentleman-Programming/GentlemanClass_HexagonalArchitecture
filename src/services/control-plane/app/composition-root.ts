// Aqui se crea la instancia del hexagono que le da todo lo que necesita para funcionar
//habilita la posibilidad de utilizarlo en forma de mock

import { ControlPlane } from "./control-plane"
import { LoggerStubAdapter } from '../../repository/adapters/drivens/logger-stub-adapter';
import { ForManagerAuthentication } from '../ports/drivers';
import { ManagerAuthenticationProxyAdapter } from "../adapters/drivers/managing-authentication-proxy-adapter";

const compositionMock =()=>{
     const loggerStubAdapter = new LoggerStubAdapter();
     const controlPlaneMock = new ControlPlane(loggerStubAdapter);//aqui se ocupa el STUB

     const managerAuthenticationProxy = new ManagerAuthenticationProxyAdapter(controlPlaneMock)
     //el driveR del adaptador es el que se utiliza para poder manejar el hexagono y asi poder control los accesos a sus metodos
     //NUNCA se se pasa el hexagono 
     return {
          managerAuthenticationProxy
     }
}

