export interface Token {
  expiresIn: number
  accessToken: string
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}
interface User {
  id: string
  first_name: string
  last_name: string
  full_name: string
  email: string
  phone: string
  role: Role
  token: string
  created_at: number
  updated_at: number
  last_login: number
}
export interface LoginResponse {
  user: User
  token: Token
  isFirstLogin: boolean
}
