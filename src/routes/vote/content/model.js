import pathToRegexp from 'path-to-regexp'
import { getVoteContent } from './service'
import { queryURL } from '../../../utils'

export default {
  namespace: 'content',
  state: {
    vote: [],
    query: {}
  },
  subscriptions: {
    contentSubscriber ({dispatch, history}) {
      return history.listen((props) => {
        const {pathname, query} = props
        const match = pathToRegexp('/vote/content')
        if (match) {
          dispatch({type: 'fetchVoteContent', payload: query.id})
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    },
    * fetchVoteContent ({payload}, {call, select, put}) {
      const data = yield call(getVoteContent)
      console.log(data)
      yield put({type: 'saveContent', payload: data.data.content})
    }
  },
  reducers: {
    saveContent (state, {payload}) {
      return {
        ...state,
        vote: payload
      }
    }
  }
}
