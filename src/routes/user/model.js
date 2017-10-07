import pathToRegexp from 'path-to-regexp'
import { verify, getUserInfo, getVerifyCode } from './service'
import { Toast } from 'antd-mobile'
import { routerRedux } from 'dva/router'

const ERR_OK = 0
export default {
  namespace: 'user',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    infoSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // const match = pathToRegexp('/user')
        if (pathname === '/user') {
          dispatch(routerRedux.push('/user/login'))
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    },
    * getVerifyCode ({payload}, {call, put}) {
      try {
        const response = yield call(getVerifyCode, payload)
        const {code, data} = response
        if (code === ERR_OK) {
          Toast.info('获取验证码成功')
          yield put({type: 'saveVerifyCode', payload: data})
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
  reducers: {
    hi (state, {payload}) {
      return {
        ...state,
        contests: payload
      }
    },
    saveVerifyCode (state, {payload}) {
      return {
        ...state,
        verifyCode: payload
      }
    }
  }
}
