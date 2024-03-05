export interface UserPermission {
    id: string
    userId: string
    admin: boolean
    user: boolean
}

export interface Permissions {
    admin: boolean,
    user: boolean
}