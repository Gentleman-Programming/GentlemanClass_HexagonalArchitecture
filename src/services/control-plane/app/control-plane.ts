import { ForRepoQuerying } from '../ports/drivens'
import { ForMonitoringAuthDetails } from '../ports/drivens/for-monitoring'
import { ForManagingAuthDetails } from '../ports/drivers/for-managing-auth-details'
import { AuthDetails, Permissions } from './schemas'
import jwt from 'jsonwebtoken'

export class ControlPlane implements ForManagingAuthDetails {
  private secretKey: string = 'mySecretKey'
  constructor(
    private readonly logger: ForMonitoringAuthDetails,
    private readonly repoQuerier: ForRepoQuerying
  ) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    const generateToken = (
      payload: object,
      secretKey: string,
      expiresIn: string
    ): string => {
      const token = jwt.sign(payload, secretKey, { expiresIn })

      return token
    }
    const generateRefreshToken = (
      payload: object,
      secretKey: string,
      expiresIn: string
    ): string => {
      const refreshToken = jwt.sign(payload, secretKey, { expiresIn })

      return refreshToken
    }
    const token = generateToken({ email, password }, this.secretKey, '30m')
    if (!token) {
      this.logger.log('Token creation', 'FAILED')
      throw new Error('Failed creating token, please check credentials')
    }

    const refreshToken = generateRefreshToken(
      { email, password },
      this.secretKey,
      '1d'
    )

    if (!refreshToken) {
      this.logger.log('RefreshToken creation', 'FAILED')
      throw new Error('Failed creating Refreshtoken, please check credentials')
    }

    return { token, refreshToken }
  }

  async getPermissions(email: string): Promise<Permissions> {
    const user = await this.repoQuerier.getUser(email)

    return { admin: user?.admin, user: user?.user }
  }
}
