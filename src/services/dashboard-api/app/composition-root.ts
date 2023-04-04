import { RepoQuerierStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { DashboardApi } from "./dashboard-api";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
  name: "John",
  email: "jhon@gmail.com",
  password: "password",
};

authenticatorProxyAdapter.login("john@gmail.com", "12345678");
authenticatorProxyAdapter.register(registerMock);
