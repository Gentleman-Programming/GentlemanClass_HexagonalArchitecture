import { RepoQuerierStubAdapter } from "../adapters/drivens";
import { AuthManagerProxyAdapter } from "../adapters/drivers";
import { ControlPlane } from "./control-plane";

const compositionMock = () => {
  const repoQuerierstub = new RepoQuerierStubAdapter();
  const controlPlane = new ControlPlane(repoQuerierstub);

  const authManagerProxy = new AuthManagerProxyAdapter(controlPlane);

  return { authManagerProxy };
};

export const { authManagerProxy } = compositionMock();
