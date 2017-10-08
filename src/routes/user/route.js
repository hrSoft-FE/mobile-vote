module.exports = {
  path: 'user',
  childRoutes: [require('./login/route'), require('./forget/route'), require('./update/route')],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
