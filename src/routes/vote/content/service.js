import { API, request } from '../../../utils'

const getVoteContent = async (id, password) => request({
  url: API.content + '/' + id + '?' + `password=${password}`,
  method: 'get',
  token: false
})
const submitVotes = async (payload) => request({
  url: API.submit + '/' + payload.id,
  method: 'post',
  data: payload.body,
  token: !!window.localStorage.getItem('token')
})

export {
  getVoteContent,
  submitVotes
}
