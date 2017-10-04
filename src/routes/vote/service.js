import { API, request } from '../../utils'

const verify = async () => request({
  url: API.verify,
  method: 'get'
})
const getUnStartVotes = async () => request({
  url: API.unstart,
  method: 'get',
  token: false
})
const getPastVotes = async () => request({
  url: API.past,
  method: 'get',
  token: false
})
const getCurrentVotes = async () => request({
  url: API.curr,
  method: 'get',
  token: false
})
const getVotedVotes = async () => request({
  url: API.voted,
  method: 'get',
  token: true
})
const getVotesDetail = async (id) => request({
  url: API.content.replace(':id', id),
  method: 'get',
  token: false
})
const submitVoteRes = async (data) => request({
  url: API.submit,
  method: 'post',
  data
})
export {
  verify,
  getUnStartVotes,
  getPastVotes,
  getCurrentVotes,
  getVotedVotes,
  getVotesDetail,
  submitVoteRes
}
