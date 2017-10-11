import pathToRegexp from 'path-to-regexp'
import { create } from '../service'
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
      }]
  },
  subscriptions: {
    radioSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
      })
    },
  },
  effects: {
    * create ({payload}, {call, select, put}) {
      const data = yield call(create, payload)
      if (data.code === 0) {
        console.log('创建成功')
      }
    },
  },
  reducers: {
    add (state, {payload = {value: ''}}) {
      let {config} = state
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
    },
    remove (state, {payload}) {
      let {config} = state
      config.splice(payload, 1)
      return {
        ...state,
        config,
      }
    },
    nowDate (state, {payload}) {
      const {date} = state
      return {
        ...state,
      }
    },
  },
}
