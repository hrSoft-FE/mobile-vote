import { API, request } from '../../utils'

const verify = async () => request({
  url: API.verify,
  method: 'get'
})
const getUserInfo = async () => {
  return request({
    url: API.userInfo,
    method: 'get',
    token: true
  })
}
const getVerifyCode = async () => {
  return request({
    url: API.verifyCode,
    method: 'get',
    token: false
  })
}
const updateUserInfo = async (data) => {
  return request({
    url: API.updateInfo,
    method: 'post',
    token: true,
    data
  })
}
const forgetPassword = async (data) => {
  return request({
    url: API.forgetPassword,
    method: 'post',
    token: true,
    data
  })
}
export { verify, getUserInfo, getVerifyCode, updateUserInfo,forgetPassword }
