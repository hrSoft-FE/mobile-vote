import pathToRegexp from 'path-to-regexp'
import { verify, getUserInfo } from './service'

export default {
  namespace: 'user',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    infoSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user')
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
