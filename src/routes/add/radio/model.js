import pathToRegexp from 'path-to-regexp'
import {} from './service'

export default {
  namespace: 'radio',
  state: {
    config: [
      {
        value: '',
        placeholder: '选项'
      }, {
        value: '',
        placeholder: '选项'
      }],
  },
  subscriptions: {
    radioSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
      })
    },
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    }
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
    },
    nowDate (state, {payload}) {
      const {date} = state
      return {
        ...state,
      }
    }
  }
}
