module.exports = {
  path: 'result',
  childRoutes: [],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
