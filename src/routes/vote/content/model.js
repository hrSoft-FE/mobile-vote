export default {
  namespace: 'content',
  state: {
    isPublic: null
  },
  subscriptions: {
    contentSubscriber ({dispatch, history}) {
      return history.listen((props) => {
        const {query} = props
        dispatch({type: 'savePublic', payload: {isPublic: query.isPublic}})
      })
    }
  },
  effects: {},
  reducers: {
    savePublic (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
