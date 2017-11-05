import pathToRegexp from 'path-to-regexp'
import { getCreatedStatistics } from './service'
import {routerRedux} from 'dva/router'

export default {
  namespace: 'result',
  state: {
    resultList: []
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({query,pathname}) => {
        const {id} = query
        if (id) {
          dispatch({type: 'fetchResultContent', payload: id})
        }
      })
    }
  },
  effects: {
    * fetchResultContent ({payload}, {put, call}) {
      const list = yield call(getCreatedStatistics, payload)
      console.log(list)
      if (list.code === 0) {
        yield put({type: 'saveContent', payload: {resultList: list.data}})
      } else {
        // yield put(routerRedux.push('/user/profile/created'))
      }
    }
  },
  reducers: {
    saveContent (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
