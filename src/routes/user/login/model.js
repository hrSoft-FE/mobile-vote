import pathToRegexp from 'path-to-regexp'
import { userLogin, register } from './service'

export default {
  namespace: 'login',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log(pathname)
        // const match = pathToRegexp('/user/login')
        if (pathname === '/user/login') {
          dispatch({type: 'initQuery'})
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
      console.log(10086)
    },
    * login ({payload}, {call, select, put}) {
      console.log(payload)
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
