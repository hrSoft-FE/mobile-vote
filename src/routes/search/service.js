import { API, request } from '../../utils'
const searchVotes = async (query) => request({
  url: `${API.search}?keyword=${query}`,
  method: 'get',
  token: false
})
export {
  searchVotes
}
