import { API, request } from '../../../../utils'

const getCreatedVotes = (page, size) => request({
  url: API.createdVote,
  method: 'get',
  token: true
})

const deleteVoteRes = (id) => request({
  url: API.delVote + `/${id}`,
  method: 'post',
  token: true
})
export {
  getCreatedVotes,
  deleteVoteRes
}
