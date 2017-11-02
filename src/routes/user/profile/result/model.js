import pathToRegexp from 'path-to-regexp'
import {
  verify,
  getWillVotes,
  getDoneVotes,
  getDoingVotes,
  getVotedVotes,
  getVotesDetail,
  submitVoteRes
} from './service'

export default {
  namespace: 'result',
  state: {
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // const match = pathToRegexp('/user/profile/created')
        // if (match) {
        //   dispatch({type: 'upDateDoingList'})
        // }
      })
    }
  },
  effects: {
  },
  reducers: {
  }
}
