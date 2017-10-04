import pathToRegexp from 'path-to-regexp'
import { verify, login, register, getUserInfo } from './service'

export default {
  namespace: 'info',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    infoSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user/info')
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
