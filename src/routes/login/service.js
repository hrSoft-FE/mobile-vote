import { API, request } from '../../utils'

const userLogin = async (data) => {
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

export { userLogin, register }