module.exports = {
  path: 'profile',
  childRoutes: [
    require('./panel/route'),
    require('./joined/route'),
    require('./created/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
