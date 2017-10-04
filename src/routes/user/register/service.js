import { API, request } from '../../../utils/index'

const register = async (data) => {
  return request({
    url: API.register,
    method: 'post',
    data
  })
}

export { register }
