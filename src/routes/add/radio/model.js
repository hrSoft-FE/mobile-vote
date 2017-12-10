import { create, getUserInfo } from '../service'
import { Toast } from 'antd-mobile'
import { goto } from '../../../utils'

export default {
  namespace: 'radio',
  state: {
    config: [
      {
        value: '',
        placeholder: '选项',
      }, {
        value: '',
        placeholder: '选项',
      }],
    isKeys: false
  },
  subscriptions: {
    radioSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/add/radio') {
          dispatch({type: 'isLogin'})
        }
      })
    }
  },
  effects: {
    * isLogin ({payload}, {call, put, select}) {
      let token = window.localStorage.getItem('token')
      if (token !== null) {
        const data = yield call(getUserInfo)
        if (data.code === 0) {
          return 0
        } else {
          goto('/user/login')
          Toast.fail('登录失效，请重新登录。')
        }
      } else {
        Toast.fail('登录后才可创建投票！')
      }
    },
    * create ({payload}, {call, select, put}) {
      const token = window.localStorage.getItem('token')
      if (token) {
        const data = yield call(create, payload)
        if (data.code === 0) {
          goto('/vote/will')
          Toast.success('创建成功！')
        }
      } else {
        goto('/user/login')
        Toast.fail('请提前登陆！')
      }
    },
  },
  reducers: {
    adds (state, {payload = {value: ''}}) {
      let {config} = state
      let len = config.length
      if (len < 10) {
        return {
          ...state,
          config: [
            ...config,
            {
              value: '',
              placeholder: '选项',
            },
          ],
        }
      } else {
        Toast.info('最多只能添加10项！')
        return {...state}
      }
    },
    remove (state, {payload}) {
      let {config} = state
      config.splice(payload, 1)
      return {
        ...state,
        config
      }
    }
  }
}
