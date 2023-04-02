export interface AuthDetails {
  token: string;
  refreshToken: string;
}

export interface Permissions {
  admin: boolean;
  user: boolean;
}
