import { routerRedux } from 'dva/router'

export default {
  namespace: 'add',
  state: {},
  subscriptions: {
    addSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/add') {
          dispatch(routerRedux.push('/add/radio'))
        }
      })
    }
  },
  effects: {
    * initQuery ({payload}, {call, select, put}) {
    }
  },
  reducers: {}
}
