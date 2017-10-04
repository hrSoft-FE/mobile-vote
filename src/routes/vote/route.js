module.exports = {
  path: 'vote',
  childRoutes: [],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
