import pathToRegexp from 'path-to-regexp'
import { getVoteContent, submitVotes } from './service'
import { routerRedux } from 'dva/router'
import { goto } from '../../../utils'

export default {
  namespace: 'content',
  state: {
    vote: [],
    query: {},
    isPublic: null
  },
  subscriptions: {
    contentSubscriber ({dispatch, history}) {
      return history.listen((props) => {
        const {pathname, query} = props
        const match = pathToRegexp('/vote/content')
        if (match && query.isPublic === '1') {
          dispatch({type: 'fetchVoteContent', payload: {id: query.id}})
          dispatch({type: 'savePublic', payload: {isPublic: query.isPublic}})
        }
      })
    }
  },
  effects: {
    * fetchVoteContent ({payload}, {call, select, put}) {
      const {id, password = null} = payload
      const data = yield call(getVoteContent, id, password)
      yield put({type: 'saveContent', payload: {vote: data.data}})
    },
    * submitVote ({payload}, {call, put}) {
      const data = yield call(submitVotes, payload)
      if (data.code === -1) {
        goto(`/vote/will`)
      } else {
        yield put({type: 'saveResult', payload: data.data})
        goto(`/vote/voted`)
      }
    }
  },
  reducers: {
    saveContent (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    saveResult (state, {payload}) {
      return {
        ...state,
        result: payload
      }
    },
    savePublic (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
