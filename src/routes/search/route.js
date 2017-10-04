module.exports = {
  path: 'search',
  childRoutes: [],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
