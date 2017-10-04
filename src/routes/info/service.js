import { API, request } from '../../utils'

const verify = async () => request({
  url: API.verify,
  method: 'get'
})
const login = async (data) => {
  return request({
    url: API.login,
    method: 'post',
    data
  })
}
const register = async (data) => {
  return request({
    url: API.register,
    method: 'post',
    data
  })
}
const getUserInfo = async () => {
  return request({
    url: API.userInfo,
    method: 'get',
    token: true
  })
}
export { verify, login, register, getUserInfo }
