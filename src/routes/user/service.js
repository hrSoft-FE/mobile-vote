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
export { verify, getUserInfo, getVerifyCode }
