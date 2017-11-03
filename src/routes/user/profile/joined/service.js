import { API, request } from '../../../../utils'

const getJoinedVotes = async (page, size) => request({
  url: API.joinVote,
  method: 'get',
  token: true
})

export {
  getJoinedVotes
}
