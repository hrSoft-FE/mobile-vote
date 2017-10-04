import pathToRegexp from 'path-to-regexp'
import {
  verify,
  getUnStartVotes,
  getPastVotes,
  getCurrentVotes,
  getVotedVotes,
  getVotesDetail,
  submitVoteRes
} from './service'

export default {
  namespace: 'vote',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/vote')
        if (match) {
          dispatch({type: 'initQuery'})
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    }
  },
  reducers: {
    hi (state, {payload}) {
      return {
        ...state,
        contests: payload
      }
    }
  }
}
