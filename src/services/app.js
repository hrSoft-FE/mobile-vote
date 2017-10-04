import { API, request } from '../utils'

const query = async () => {
  return request({
    url: API.tokenVerify,
    method: 'get',
    token: true
  })
}
export { query }
