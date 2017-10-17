import pathToRegexp from 'path-to-regexp'
import { getUserInfo } from '../service'
import { Toast, Modal } from 'antd-mobile'
import { routerRedux } from 'dva/router'
import { goto } from '../../../utils'

const alert = Modal.alert
const ERR_OK = 0
export default {
  namespace: 'profile',
  state: {
    userInfo: {},
    query: {}
  },
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // const match = pathToRegexp('/user/login')
        if (pathname === '/user/profile') {
          dispatch({type: 'initQuery'})
          dispatch({type: 'getUserInfo'})
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    },
    * getUserInfo ({payload}, {call, select, put}) {
      try {
        const response = yield call(getUserInfo)
        const {code, data} = response
        if (code === ERR_OK) {
          yield put({type: 'saveUserInfo', payload: data.user})
        } else {
          window.location.href = '/user/login'
          Toast.info('请重新登录')
          console.error(code, data)
        }
      } catch (e) {
        window.location.href = '/user/login'
        Toast.info('请重新登录')
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
    saveUserInfo (state, {payload}) {
      return {
        ...state,
        userInfo: payload
      }
    },
    saveToken (state, {payload}) {
      return {
        ...state,
        token: payload
      }
    },
    saveRegisterField (state, {payload}) {
      return {
        ...state,
        registerField: payload
      }
    }
  }
}
