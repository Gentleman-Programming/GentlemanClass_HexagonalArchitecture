export interface User {
  name: string
  email: string
  password: string
  admin: boolean
  user: boolean
}

export interface RepoUser extends User {
  id: string
}

export type ExternalUser = Omit<RepoUser, 'password'>
