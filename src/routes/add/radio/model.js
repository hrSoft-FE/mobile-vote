import { create } from '../service'
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
    isKeys: false,
  },
  subscriptions: {
    radioSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {})
    },
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
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
        config,
      }
    },
  },
}
