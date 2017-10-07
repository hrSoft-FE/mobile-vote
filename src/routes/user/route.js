module.exports = {
  path: 'user',
  childRoutes: [require('./login/route'), require('./register/route'), require('./update/route')],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
