import { routerRedux } from 'dva/router'
/* eslint-disable no-unused-vars */
import pathToRegexp from 'path-to-regexp'

export default {
  namespace: 'app',
  state: {},
  subscriptions: {
    setup ({dispatch, history}) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        const match = pathname === '/'
        if (match) {
          dispatch(routerRedux.push('/vote/will'))
        }
      })
    }
  },

  effects: {
    * fetch ({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'})
    }
  },

  reducers: {
    save (state, action) {
      return {...state, ...action.payload}
    }
  }

}
