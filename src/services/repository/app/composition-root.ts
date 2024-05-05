import { LoggerStubAdapter } from "../adapters/drivens";
import { UserPermissionManagerProxy } from "../adapters/drivers";
import { UserManagerProxy } from "./../adapters/drivers/user-manager-proxy";
import { Repository } from "./repository";
import { UserPermissionRepository } from "./user-permission-repository";

export const compositionMock = () => {
  const monitorStub = new LoggerStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  const userManagerProxy = new UserManagerProxy(repositoryMock);

  const userPermissionRepositoryMock = new UserPermissionRepository(monitorStub)
  const userPermissionManagerProxy = new UserPermissionManagerProxy(userPermissionRepositoryMock);

  return {
    userManagerProxy,
    userPermissionManagerProxy
  };
};

export const { userManagerProxy, userPermissionManagerProxy } = compositionMock();