import axios from "axios"
import { LOGIN_USER, REGIST_USER, AUTH_USER } from "./types"

export function loginUser(dataToSubmit) {
  const request = axios.post("/admin/loginProc", dataToSubmit).then((response) => response.data)
  return {
    type: LOGIN_USER,
    payload: request,
  }
}

export function registUser(dataToSubmit) {
  const request = axios.post("/admin/registProc", dataToSubmit).then((response) => response.data)
  return {
    type: REGIST_USER,
    payload: request,
  }
}

export function auth(token) {
  const request = axios.post(`/admin/auth`, token).then((response) => response.data)
  return {
    type: AUTH_USER,
    payload: request,
  }
}
