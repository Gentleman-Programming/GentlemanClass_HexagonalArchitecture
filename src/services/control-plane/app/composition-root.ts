import { ControlPlane } from "./control-plane";
import { ControlAuthenticatorStub } from "../adapters/drivens";
import { ControlAuthenticatingProxyAdapter } from "../adapters/drivers";

export const compositionMock = () => {
  const authenticatorStub = new ControlAuthenticatorStub();
  const controlPlane = new ControlPlane(authenticatorStub);
  const controlAuthenticatingProxyAdapter =
    new ControlAuthenticatingProxyAdapter(controlPlane);

  return {
    controlAuthenticatingProxyAdapter,
  };
};

export const { controlAuthenticatingProxyAdapter } = compositionMock();
