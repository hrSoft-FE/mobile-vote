import pathToRegexp from 'path-to-regexp'
import { verify, getUserInfo, getVerifyCode, updateUserInfo, forgetPassword } from './service'
import { Toast, Modal } from 'antd-mobile'
import { routerRedux, Link } from 'dva/router'

const ERR_OK = 0
export default {
  namespace: 'user',
  state: {
    contests: [],
    query: {},
    token: {}
  },
  subscriptions: {
    infoSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // token ? user/info : user/login
        // const match = pathToRegexp('/user')
        if (pathname === '/user') {
          dispatch(routerRedux.push('/user/profile'))
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
        throw e
      }
    },
    * update ({payload}, {call, select, put}) {
      try {
        const response = yield call(updateUserInfo, payload)
        const {code, data} = response
        if (code === ERR_OK) {
          yield put({type: 'saveUpdate', payload: data})
          Modal.alert('密码修改成功', '请重新登录', [
            {text: '确定', onPress: () => { window.location.href = '/user/login' }}
          ])
        }
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    * forget ({payload}, {call, select, put}) {
      try {
        const response = yield call(forgetPassword, payload)
        const {code, data} = response
        if (code === ERR_OK) {
          yield put({type: 'saveForget', payload: data})
          Modal.alert('重置密码成功', '请重新登录', [
            {text: '确定', onPress: () => { window.location.href = '/user/login' }}
          ])
        }
      } catch (e) {
        console.log(e)
        throw e
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
    },
    saveUpdate (state, {payload}) {
      return {
        ...state,
        update: payload
      }
    }
  },
  saveUpdate (state, {payload}) {
    return {
      ...state,
      forget: payload
    }
  }
}
