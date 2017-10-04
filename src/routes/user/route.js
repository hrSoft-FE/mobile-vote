module.exports = {
  path: 'user',
  childRoutes: [require('./login/route')],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
      callback(null,require('./index'))
    })
  }
}
