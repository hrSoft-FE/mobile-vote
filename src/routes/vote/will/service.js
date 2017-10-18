import { API, request, urlEncode } from '../../../utils'

const verify = async () => request({
  url: API.verify,
  method: 'get'
})
const getWillVotes = async (page, size) => request({
  url: API.will + '?' + urlEncode({'page': page, 'size': size, 'time': '0'}),
  method: 'get',
  token: false
})
const getDoingVotes = async (page, size) => request({
  url: API.doing + '?' + urlEncode({'page': page, 'size': size, 'time': '1'}),
  method: 'get',
  token: false
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
  getDoingVotes,
  getVotesDetail,
  submitVoteRes
}
