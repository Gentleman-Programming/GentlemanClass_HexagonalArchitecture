import { ExternalUser } from '../../../repository/app/schemas'

export interface ForRepoQuerying {
  getUser(email: string): Promise<ExternalUser>
}
