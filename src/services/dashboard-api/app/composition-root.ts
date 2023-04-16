import { RepoQuerierStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { DashboardApi } from "./dashboard-api";
import {
  AuthenticatorProxyAdapter,
  authTRPCAdapter,
} from "../adapters/drivers";
import { initTRPC } from "@trpc/server";

const compositionMock = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  // DRIVERS
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();
/* 
const registerMock = {
  name: "John",
  email: "jhon@gmail.com",
  password: "password",
};

authenticatorProxyAdapter.login("john@gmail.com", "12345678");
authenticatorProxyAdapter.register(registerMock);
 */
export const localTRPCCompose = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  // TRPC INSTANCE
  const t = initTRPC.create();

  // TRPC DRIVER
  const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t);

  const appRouter = t.mergeRouters(authTRPCAdapterRouter);

  return { appRouter };
};

export const { appRouter } = localTRPCCompose();
