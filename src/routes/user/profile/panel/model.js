import { routerRedux } from 'dva/router'

export default {
  namespace: 'panel',
  state: {
    contests: [],
    query: {}
  },
  subscriptions: {
    panelSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
      })
    }
  },
  effects: {
  },
  reducers: {
  }
}
