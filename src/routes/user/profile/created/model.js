import pathToRegexp from 'path-to-regexp'
import {
  getCreatedVotes,
  deleteVoteRes
} from './service'
import {Toast} from 'antd-mobile'

export default {
  namespace: 'created',
  state: {
    voteList: []
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user/profile/created')
        if (match) {
          dispatch({type: 'upDateCreatedList'})
        }
      })
    }
  },
  effects: {
    * upDateCreatedList ({}, {call, put}) {
      const data = yield call(getCreatedVotes)
      const list = data.data.reverse()
      yield put({type: 'saveList', payload: {voteList: list}})
    },
    * delCreatedVote ({payload}, {call, select, put}) {
      const data = yield call(deleteVoteRes, payload)
      if (data.code === 0) {
        Toast.success('删除成功', 1)
        yield put({type: 'upDateCreatedList'})
      }
    }
  },
  reducers: {
    saveList (state, {payload}) {
      return {
        ...state,
        ...payload
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
