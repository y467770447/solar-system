export interface LoginRequestData {
  /** admin 或 editor */
  userName: ""
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ userName: string; roles: string[] }>
