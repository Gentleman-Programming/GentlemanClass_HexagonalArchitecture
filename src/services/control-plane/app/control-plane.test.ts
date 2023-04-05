import { describe, expect, it } from 'vitest'
import { RepoQuerierAdapter } from '../adapters/drivens/repo-querier-stub-adapter'
import { LoggerStubAdapter } from '../adapters/drivens'
import { ControlPlane } from './control-plane'
import { AuthDetails, Permissions } from './schemas'

describe('ControlPlane', () => {
  const monitorStub = new LoggerStubAdapter()
  const repoQueryStub = new RepoQuerierAdapter()
  const controPlaneMock = new ControlPlane(monitorStub, repoQueryStub)

  it.concurrent('should not expect a 123 token', async () => {
    //GIVEN
    const mockedParams = {
      email: `12`,
      password: '12345678',
    }

    const expectedResult: AuthDetails = {
      token: '123',
      refreshToken: '123',
    }

    //WHEN
    let result
    try {
      result = await controPlaneMock.getAuthDetails(
        mockedParams.email,
        mockedParams.password
      )
    } catch (error) {}

    //THEN
    expect(result).not.toEqual(expectedResult)
  })

  it.concurrent('should get user permissions', async () => {
    //GIVEN

    const expectedResult: Permissions = {
      admin: false,
      user: true,
    }

    //WHEN
    const result = await controPlaneMock.getPermissions('john@gmail.com')

    //THEN
    expect(result).toEqual(expectedResult)
  })
})
