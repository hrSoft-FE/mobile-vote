module.exports = {
  path: 'add',
  childRoutes: [
    require('./radio/route'),
    require('./checkbox/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
