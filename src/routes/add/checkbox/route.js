module.exports = {
  path: 'checkbox',
  childRoutes: [],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
