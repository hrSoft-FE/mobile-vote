import { API, request } from '../../../utils'

const getVoteContent = async (id) => request({
  url: API.content + '/' + id,
  method: 'get',
  token: false
})
const submitVotes = async (payload) => request({
  url: API.submit + '/' + payload.id,
  method: 'post',
  data: payload.body,
  token: false
})

export {
  getVoteContent,
  submitVotes
}
