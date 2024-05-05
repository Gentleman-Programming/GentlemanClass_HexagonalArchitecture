export interface UserPermissions {
  id: string;
  userId: string;
  admin: boolean;
  user: boolean;
}

export interface AuthDetails {
  token: string;
  refreshToken: string;
}

export interface Permissions {
  admin: boolean;
  user: boolean;
}
