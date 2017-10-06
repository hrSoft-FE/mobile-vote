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
    refreshing: true
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/vote/doing')
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
      console.log('firstList', list)
      yield put({type: 'saveList', payload: list})
      yield put({type: 'saveStatus', payload: status})
    },
    * fetchNextVote ({payload}, {call, select, put}) {
      const {status} = yield select(({vote}) => vote)
      let data = ''
      switch (status) {
        case 'doing':
          data = yield call(getDoneVotes) // 记得改回来
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
      console.log('secondList', list)
      yield put({type: 'saveList', payload: list})
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
    saveRefreshing (state, {payload}) {
      return {
        ...state,
        refreshing: payload
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
