import { LoggerStubAdapter } from '../adapters/drivens'
import { RepoQuerierAdapter } from '../adapters/drivens/repo-querier-stub-adapter'
import { AuthDetailsProxy } from '../adapters/drivers'
import { ControlPlane } from './control-plane'

const compositionMock = () => {
  const monitorStub = new LoggerStubAdapter()
  const repoQueryStub = new RepoQuerierAdapter()
  const dashboardApiMock = new ControlPlane(monitorStub, repoQueryStub)

  const authenticatorProxyAdapter = new AuthDetailsProxy(dashboardApiMock)

  return {
    authenticatorProxyAdapter,
  }
}

export const { authenticatorProxyAdapter } = compositionMock()

const registerMock = {
  name: 'John',
  email: 'jhon@gmail.com',
  password: 'password',
}

authenticatorProxyAdapter.getAuthDetails(
  registerMock.email,
  registerMock.password
)
authenticatorProxyAdapter.getPermissions(registerMock.email)
