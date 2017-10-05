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
  namespace: 'vote',
  state: {
    voteList: [],
    index: 0,
    max: 10,
    page: 1
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/vote')
        if (match) {
          dispatch({type: 'upDateList'})
        }
      })
    }
  },
  effects: {
    * upDateList ({payload}, {call, select, put}) {
      const status = payload || 'doing'
      let data = ''
      switch (status) {
        case 'doing':
          data = yield call(getDoingVotes)
          break
        case 'done':
          data = yield call(getDoneVotes)
          break
        case 'will':
          data = yield call(getWillVotes)
          break
        default:
          data = ''
      }
      const list = data.data.votes
      yield put({type: 'saveList', payload: list})
      yield put({type: 'saveStatus', payload: status})
    },
    * fetchNextVote ({payload}, {call, select, put}) {
      const {status, voteList, index, page, max} = yield select(({vote}) => vote)
      let body = {'index': index, 'max': max, 'page': page}
      console.log('later', body)
      let data = ''
      switch (status) {
        case 'doing':
          data = yield call(getDoingVotes)
          break
        case 'done':
          data = yield call(getDoneVotes)
          break
        case 'will':
          data = yield call(getWillVotes)
          break
        default:
          data = ''
      }
      const list = data.data.votes
      const newList = list.concat(voteList)
      yield put({type: 'saveList', payload: newList})
      console.log('hi')
    }
  },
  reducers: {
    saveList (state, {payload}) {
      return {
        ...state,
        voteList: payload
      }
    },
    saveStatus (state, {payload}) {
      return {
        ...state,
        status: payload
      }
    },
    savePage (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
