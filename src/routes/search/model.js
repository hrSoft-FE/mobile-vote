import pathToRegexp from 'path-to-regexp'
import { searchVotes } from './service'

export default {
  namespace: 'search',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    searchSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const match = pathToRegexp('/user/search')
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
