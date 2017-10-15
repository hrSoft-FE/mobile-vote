export default {
  namespace: 'vote',
  state: {},
  subscriptions: {
    voteSubscriber ({dispatch, history}) {
      return history.listen(({pathname, query}) => {
      })
    }
  },
  effects: {},
  reducers: {}
}
