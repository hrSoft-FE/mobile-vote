import { API, request } from '../../utils'
const create = async (data) => request({
  url: API.create,
  method: 'post',
  token: true,
  data
})
const getUserInfo = async () => {
  return request({
    url: API.userInfo,
    method: 'get',
    token: true
  })
}
export { create, getUserInfo }
