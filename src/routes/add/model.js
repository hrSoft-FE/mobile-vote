import { routerRedux } from 'dva/router'

export default {
  namespace: 'add',
  state: {},
  subscriptions: {
    addSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log(pathname)
        if (pathname === '/add') {
          console.log('19999')
          dispatch(routerRedux.push('/add/radio'))
          console.log('20000')
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
