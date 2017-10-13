import {create} from '../service'
import {Toast} from 'antd-mobile'
export default {
  namespace: 'checkbox',
  state: {
    config: [
      {
        value: '',
        placeholder: '选项'
      }, {
        value: '',
        placeholder: '选项'
      }]
  },
  subscriptions: {
    radioSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    },
    * create ({payload}, {call, select, put}) {
      const data = yield call(create, payload)
      if (data.code === 0) {
        Toast.success('创建成功！')
      }
    }
  },
  reducers: {
    adds (state, {payload = {value: ''}}) {
      let {config} = state
      return {
        ...state,
        config: [
          ...config,
          {
            value: '',
            placeholder: '选项'
          }
        ]
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
