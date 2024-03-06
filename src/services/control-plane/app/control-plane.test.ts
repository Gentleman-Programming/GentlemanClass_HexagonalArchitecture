import { beforeEach, describe, expect, it } from "vitest";
import { RepoQuerierStubAdapter } from "../adapters/drivens";
import { ControlPlane } from "./control-plane";

describe("ControlPlane", () => {
  const repoQuerierstub = new RepoQuerierStubAdapter();
  let controlPlane = new ControlPlane(repoQuerierstub);

  beforeEach(() => {
    controlPlane = new ControlPlane(repoQuerierstub);
  });

  it.concurrent("should get auth details", async () => {
    // GIVEN
    const mockEmail = "john@gmail.com";
    const mockPassword = "123";

    const resultExpected = { token: "token", refreshToken: "refreshToken" };

    // WHEN
    const result = await controlPlane.getAuthDetails(mockEmail, mockPassword);

    // THEN
    expect(result).toEqual(resultExpected);
  });

  it.concurrent("should get permissions", async () => {
    // GIVEN
    const mockUserId = "1";

    const resultExpected = { admin: true, user: true };

    // WHEN
    const result = await controlPlane.getPermissions(mockUserId);

    // THEN
    expect(result).toEqual(resultExpected);
  });
});
