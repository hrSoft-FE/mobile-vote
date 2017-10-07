import { API, request } from '../../../utils'

const getVoteContent = async () => request({
  url: API.content,
  method: 'get',
  token: false
})

export {
  getVoteContent
}
