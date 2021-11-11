export type typeUser = {
    name: string,
    email: string,
    password: string,
    is_admin: boolean,
    is_active: boolean
}

export type typeUserAuth = {
    email: string,
    password: string
}