import { describe, expect, it } from "vitest";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQuerierStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { DashboardApi } from "./dashboard-api";
import { AuthenticatedUser, User } from "./schemas";

describe("DashboardApi", () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  it.concurrent("should login", async () => {
    //GIVEN
    const mockedParams = {
      email: "john@gmail.com",
      password: "12345678",
    };

    const expectedResult: AuthenticatedUser = {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    //WHEN
    const result = await dashboardApiMock.login(
      mockedParams.email,
      mockedParams.password
    );

    //THEN
    expect(result).toEqual(expectedResult);
  });

  it.concurrent("should register", async () => {
    //GIVEN

    const mockedUser: User = {
      name: "John",
      email: "john@gmail.com",
      password: "password",
    };

    const expectedResult: AuthenticatedUser = {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    //WHEN
    const result = await dashboardApiMock.register(mockedUser);

    //THEN
    expect(result).toEqual(expectedResult);
  });
});
