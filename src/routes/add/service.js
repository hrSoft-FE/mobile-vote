import { API, request } from '../../utils'
const create = async () => request({
  url: API.create,
  method: 'post',
  token: false
})
export { create }