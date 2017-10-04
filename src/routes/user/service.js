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
export { verify, getUserInfo }
