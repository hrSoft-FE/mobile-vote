import { API, request } from '../../utils'

const verify = async () => request({
  url: API.verify,
  method: 'get'
})
const getWillVotes = async () => request({
  url: API.will,
  method: 'get',
  token: false
})
const getDoneVotes = async () => request({
  url: API.done,
  method: 'get',
  token: false
})
const getDoingVotes = async () => request({
  url: API.doing,
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
  getWillVotes,
  getDoneVotes,
  getDoingVotes,
  getVotedVotes,
  getVotesDetail,
  submitVoteRes
}
