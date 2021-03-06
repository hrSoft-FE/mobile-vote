module.exports = {
  path: 'vote',
  childRoutes: [
    require('./content/route'),
    require('./doing/route'),
    require('./will/route'),
    require('./done/route'),
    require('./password/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
