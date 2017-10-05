module.exports = {
  path: 'vote',
  childRoutes: [
    require('./voteContent/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
