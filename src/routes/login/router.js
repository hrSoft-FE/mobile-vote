module.exports = {
  path: 'login',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    })
  }
}
// module.exports = {
//   path: 'register',
//   getComponents (nextState, callback) {
//     require.ensure([], () => {
//       callback(null, require('./register'))
//     })
//   }
// }
// module.exports = {
//   path: 'forget',
//   getComponents (nextState, callback) {
//     require.ensure([], () => {
//       callback(null, require('./forget'))
//     })
//   }
// }
// module.exports = {
//   path: 'update',
//   getComponents (nextState, callback) {
//     require.ensure([], () => {
//       callback(null, require('./update'))
//     })
//   }
// }
