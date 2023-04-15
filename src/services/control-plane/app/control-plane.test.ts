import { describe, expect, it } from "vitest";
import { ControlPlane } from "./control-plane";
import { ControlAuthenticatorStub } from "../adapters/drivens";
import { ControlAuthenticatingProxyAdapter } from "../adapters/drivers";
import { AuthDetails, Permissions } from "./shemas";

describe("Control Plane", () => {
  const authenticatorStub = new ControlAuthenticatorStub();
  const controlPlane = new ControlPlane(authenticatorStub);
  const controlAuthenticatingProxyAdapter =
    new ControlAuthenticatingProxyAdapter(controlPlane);

  it.concurrent("should return a token an refreshToken", async () => {
    const mockedUser = {
      email: "JohnC@gmail.com",
      password: "It's John Cena",
    };

    const expectResult: AuthDetails = {
      token: "it's a token",
      refreshToken: "it's a cool token",
    };

    const result = await controlAuthenticatingProxyAdapter.getAuthDetails(
      mockedUser.email,
      mockedUser.password
    );

    expect(result).toEqual(expectResult);
  });

  it.concurrent("should throw error ", async () => {
    const mockedUser = {
      email: "Simon@gmail.com",
      password: "Simon si soy",
    };

    const expectResult: AuthDetails = {
      token: "it's a token",
      refreshToken: "it's a cool token",
    };
    let result;

    try {
      result = await controlAuthenticatingProxyAdapter.getAuthDetails(
        mockedUser.email,
        mockedUser.password
      );
    } catch (e) {}
    expect(result).not.toEqual(expectResult);
  });

  it.concurrent("should be return user permission only", async () => {
    const mockedUser = {
      email: "Mesirve@gmail.com",
      password: "123456",
    };

    const expectResult: Permissions = {
      admin: false,
      user: true,
    };

    const result = await controlAuthenticatingProxyAdapter.getPermissions(
      mockedUser.email,
      mockedUser.password
    );

    expect(result).toEqual(expectResult);
  });

  it.concurrent("should be return both permissions", async () => {
    const mockedUser = {
      email: "JohnC@gmail.com",
      password: "It's John Cena",
    };

    const expectResult: Permissions = {
      admin: true,
      user: true,
    };

    const result = await controlAuthenticatingProxyAdapter.getPermissions(
      mockedUser.email,
      mockedUser.password
    );

    expect(result).toEqual(expectResult);
  });
});
