module.exports = {
  path: 'info',
  childRoutes: [],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
