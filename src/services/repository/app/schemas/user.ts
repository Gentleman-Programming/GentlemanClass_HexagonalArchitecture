export interface User {
  name: string;
  email: string;
  password: string;
}

export interface RepoUser extends User {
  id: string;
}

export type ExternalUser = Omit<RepoUser, "password">;
