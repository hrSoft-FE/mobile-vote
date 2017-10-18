import { getVoteContent, submitVotes } from './service'
import { goto } from '../../../utils'
import { Toast } from 'antd-mobile'

export default {
  namespace: 'content',
  state: {
    vote: [],
    query: {},
    isPublic: null,
    password: null
  },
  subscriptions: {
    contentSubscriber ({dispatch, history}) {
      return history.listen((props) => {
        const {query} = props
        dispatch({type: 'savePublic', payload: {isPublic: query.isPublic}})
      })
    }
  },
  effects: {
    * fetchVoteContent ({payload}, {call, put}) {
      const {id, password = null} = payload
      const data = yield call(getVoteContent, id, password)
      if (data.code === 30004) {
        Toast.offline('密码错误')
      }
      if (data.code === 0) {
        yield put({type: 'saveContent', payload: {vote: data.data}})
        if (password) {
          goto(`/vote/content?id=${id}`)
        }
      }
    },
    * submitVote ({payload}, {call}) {
      const data = yield call(submitVotes, payload)
      if (data.code === 50004) {
        Toast.offline('您已投过票', 1)
      }
      if (data.code === 0) {
        Toast.success('投票成功', 1)
        goto(`/vote/doing`)
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
    },
    savePassword (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
