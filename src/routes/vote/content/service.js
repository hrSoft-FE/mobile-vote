import { API, request } from '../../../utils'

const getVoteContent = async (id) => request({
  url: API.content + '/' + id,
  method: 'get',
  token: false
})

export {
  getVoteContent
}
