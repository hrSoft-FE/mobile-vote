import pathToRegexp from 'path-to-regexp'
import {
  getJoinedVotes
} from './service'

export default {
  namespace: 'joined',
  state: {
    voteList: []
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user/profile/created')
        if (match) {
          dispatch({type: 'upDateJoinedList'})
        }
      })
    }
  },
  effects: {
    * upDateJoinedList ({payload}, {call, select, put}) {
      const data = yield call(getJoinedVotes)
      const list = data.data
      yield put({type: 'saveList', payload: {voteList: list}})
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
