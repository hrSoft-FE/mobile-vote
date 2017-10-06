module.exports = {
  path: 'vote',
  childRoutes: [
    require('./voteContent/route'),
    require('./doing/route'),
    require('./will/route'),
    require('./done/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
