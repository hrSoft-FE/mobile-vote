import pathToRegexp from 'path-to-regexp'
import { userLogin, register } from './service'
import { Toast } from 'antd-mobile'

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
    * login ({payload}, {call, select, put}) {
      const data = yield call(userLogin, payload)
      yield put({type: 'saveUserInfo', payload: data})
      Toast.success('登录成功', 1)
    },
    * register ({payload}, {call, select, put}) {
      console.log(payload)
      const data = yield call(register, payload)
      yield put({type: 'saveRegisterField', payload: data})
      Toast.success('注册成功', 2)
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
    saveRegisterField (state, {payload}) {
      return {
        ...state,
        registerField: payload
      }
    }
  }
}
