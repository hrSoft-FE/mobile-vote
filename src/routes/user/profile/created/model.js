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
  namespace: 'created',
  state: {
    voteList: [],
    page: 1,
    size: 10,
    isLastPage: false
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user/profile/created')
        if (match) {
          dispatch({type: 'upDateDoingList'})
        }
      })
    }
  },
  effects: {
    * upDateDoingList ({payload}, {call, select, put}) {
      let {size} = yield select(({created}) => created)
      const data = yield call(getDoingVotes, 1, size)
      const list = data.data.list
      yield put({type: 'saveList', payload: list})
      yield put({type: 'saveCount', payload: {count: Math.ceil(data.data.count / 10)}})
    },
    * fetchNextDoingVote ({payload}, {call, select, put}) {
      const {size, voteList} = yield select(({doing}) => doing)
      const data = yield call(getDoingVotes, payload.page, size)
      let nextList = voteList.concat(data.data.list)
      yield put({type: 'saveList', payload: nextList})
      yield put({type: 'savePage', payload: {page: payload.page}})
    }
  },
  reducers: {
    saveList (state, {payload}) {
      return {
        ...state,
        voteList: payload
      }
    },
    saveCount (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    savePage (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    saveLastPage (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
