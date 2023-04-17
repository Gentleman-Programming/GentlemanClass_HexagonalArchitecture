import { describe, it,expect } from "vitest";
import { LoggerStubAdapter } from "../adapters/drivens";
import { ControlPlane } from "./control-plane";
import { ManagerAuthenticationProxyAdapter } from "../adapters/drivers";

describe("ControlPlane",()=>{
     const loggerStubAdapter = new LoggerStubAdapter();
     const controlPlaneMock = new ControlPlane(loggerStubAdapter);//aqui se ocupa el STUB

     // const managerAuthenticationProxy = new ManagerAuthenticationProxyAdapter(controlPlaneMock)

     it.concurrent("should get auth description", async()=>{
          const mockedUser = {email:"jovany@gmail.com",password:"123"}
          const expectedResult={token:"123", refreshToken:"1234"} 
          //TODO
          //Cambia este resultado, di que se espera recibir un objeto que contec

          const result = await controlPlaneMock.getAuthDetails(mockedUser.email,mockedUser.password);
          expect(result).toEqual(expectedResult)
     })

     it.concurrent("should get permissions", async()=>{
          const mockedUser = {email:"jovany@gmail.com",password:"123"}
          const expectedResult={admin:true, user:true} 
          //TODO
          //Cambia este resultado, di que se espera recibir un objeto que contec

          const result = await controlPlaneMock.getPermissions(mockedUser.email,mockedUser.password);
          expect(result).toEqual(expectedResult)
     })
})