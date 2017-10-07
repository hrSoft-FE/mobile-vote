import pathToRegexp from 'path-to-regexp'
import {} from './service'
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
        console.log(props)
        const match = pathToRegexp('/vote/content')
        if (match) {
          console.log('id', query.id)

          // this.props.dispatch({type: 'fetchVoteContent', payload: id})
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
