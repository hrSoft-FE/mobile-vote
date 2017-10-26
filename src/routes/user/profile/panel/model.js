import { routerRedux } from 'dva/router'
import { getUserInfo } from '../../service'
import { Toast, Modal } from 'antd-mobile'

const alert = Modal.alert
const ERR_OK = 0

export default {
  namespace: 'panel',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    panelSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // const match = pathToRegexp('/user/login')
        if (pathname === '/user/profile/panel') {
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
      const userInfo = yield select(({login}) => login)
      const {code, data} = yield call(getUserInfo)
      if (code === ERR_OK) {
        yield put({type: 'saveUserInfo', payload: data.user})
      } else {
        yield put(routerRedux.push('/user/login'))
        Toast.info('请重新登录')
        console.error(code, data)
      }
    }
  },
  reducers: {
    saveUserInfo (state, {payload}) {
      return {
        ...state,
        userInfo: payload
      }
    },
  }
}
