import { LoggerStubAdapter } from "../adapters/drivens";
import { UserPermissionManagerProxy } from "../adapters/drivers";
import { UserManagerProxy } from "./../adapters/drivers/user-manager-proxy";
import { Repository } from "./repository";

export const compositionMock = () => {
  const monitorStub = new LoggerStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  const userManagerProxy = new UserManagerProxy(repositoryMock);
  const userPermissionManagerProxy = new UserPermissionManagerProxy(repositoryMock);

  return {
    userManagerProxy,
    userPermissionManagerProxy
  };
};

export const { userManagerProxy, userPermissionManagerProxy } = compositionMock();