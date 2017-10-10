import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import {} from './service'

export default {
  namespace: 'add',
  state: {
    contests: [],
    query: {},
  },
  subscriptions: {
    searchSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/add') {
          dispatch(routerRedux.push('/add/radio'))
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    }
  },
  reducers: {
    saveStatus (state, {payload}) {
      return {
        ...state,
        status: payload,
      }
    },
  },
}
