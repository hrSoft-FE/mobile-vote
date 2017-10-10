import { API, request } from '../../utils'
const create = async (query) => request({
  url: `${API.search}?keyword=${query}`,
  method: 'get',
  token: false
})
export { create }
