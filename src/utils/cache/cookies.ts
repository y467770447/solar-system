/** 统一处理 Cookie */

import CacheKey from "@/constants/cache-key"
import Cookies from "js-cookie"

const userInfoKey = "userInfo"

export const getToken = () => {
  return Cookies.get(CacheKey.TOKEN)
}
export const setToken = (token: string) => {
  Cookies.set(CacheKey.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(CacheKey.TOKEN)
}
export const setUserInfo = (userInfo: any) => {
  Cookies.set(userInfoKey, userInfo)
}
export const getUserInfo = () => {
  return Cookies.get(userInfoKey)
}
