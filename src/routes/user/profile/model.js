import { routerRedux } from 'dva/router'

export default {
  namespace: 'profile',
  state: {
    userInfo: {},
    query: {}
  },
  subscriptions: {
    profileSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/user/profile') {
          dispatch(routerRedux.push('/user/profile/panel'))
        }
      })
    }
  },
  effects: {
  },
  reducers: {
  }
}
