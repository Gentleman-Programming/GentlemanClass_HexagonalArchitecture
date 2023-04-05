import { ExternalUser } from '../../../repository/app/schemas'
import { ForRepoQuerying } from '../../ports/drivens'

const userMock: ExternalUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@gmail.com',
  admin: false,
  user: true,
}

export class RepoQuerierAdapter implements ForRepoQuerying {
  getUser(_email: string): Promise<ExternalUser> {
    return Promise.resolve(userMock)
  }
}
