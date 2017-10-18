import pathToRegexp from 'path-to-regexp'
import { Toast } from 'antd-mobile'
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
  namespace: 'will',
  state: {
    voteList: [],
    page: 1,
    size: 10,
    isLastPage: false
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/vote/will')
        if (match) {
          dispatch({type: 'upDateWillList'})
        }
      })
    }
  },
  effects: {
    * upDateWillList ({payload}, {call, select, put}) {
      let {size} = yield select(({will}) => will)
      const data = yield call(getWillVotes, 1, size)
      const list = data.data.list
      yield put({type: 'saveList', payload: list})
      yield put({type: 'saveCount', payload: {count: Math.ceil(data.data.count / 10)}})
    },
    * fetchNextWillVote ({payload}, {call, select, put}) {
      const {size, voteList} = yield select(({will}) => will)
      const data = yield call(getWillVotes, payload.page, size)
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
