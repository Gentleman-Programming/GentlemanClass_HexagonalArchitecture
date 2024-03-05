import { LoggerStub, RepoQuerierStubAdapter } from "../adapters/drivens";
import { AuthManagerProxyAdapter } from "../adapters/drivers";
import { ControlPlane } from "./control-plane";

const compositionMock = () => {
  const repoQuerierstub = new RepoQuerierStubAdapter();
  const loggerStub = new LoggerStub();
  const controlPlane = new ControlPlane(repoQuerierstub, loggerStub);

  const authManagerProxy = new AuthManagerProxyAdapter(controlPlane);

  return { authManagerProxy };
};

export const { authManagerProxy } = compositionMock();
