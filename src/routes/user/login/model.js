import pathToRegexp from 'path-to-regexp'
import { userLogin, register } from './service'
import { Toast, Modal } from 'antd-mobile'
import { routerRedux } from 'dva/router'

const alert = Modal.alert
const ERR_OK = 0
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
    },
    * changePage ({payload}, {call, select, put}) {
      yield put(routerRedux.push(`/user/${payload}`))
    },
    * login ({payload}, {call, select, put}) {
      console.log(window.location.hash)
      try {
        const response = yield call(userLogin, payload)
        const {code, data} = response
        if (code === ERR_OK) {
          const {user, token} = data
          yield put({type: 'saveUserInfo', payload: user})
          yield put({type: 'saveToken', payload: token})
          window.localStorage.setItem('token', token)
          Toast.success('登录成功', 1)
          yield put(routerRedux.push('/user'))
        } else {
          Modal.alert('登录失败', `可能是密码错误`, [
            {text: '确定', onPress: () => {}}
          ])
        }
      } catch (e) {
        Modal.alert('登录失败', `未知原因`, [
          {text: '确定', onPress: () => {}}
        ])
      }
    },
    * register ({payload}, {call, select, put}) {
      console.log(payload)
      try {
        const response = yield call(register, payload)
        const {code, data} = response
        if (code === ERR_OK) {
          yield put({type: 'saveRegisterField', payload: data})
          Toast.success('注册成功', 2)
          yield put(routerRedux.push('/user'))
        } else {
          Modal.alert('注册失败', `${data}`, [
            {text: 'OK', onPress: () => {}}
          ])
        }
      } catch (e) {
        Modal.alert('注册失败', `我也不知道为什么`, [
          {text: 'OK', onPress: () => {}}
        ])
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
