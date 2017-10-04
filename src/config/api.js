const apiMaker = path => `${path}`

export default {
  userInfo: apiMaker('user'),
  login: apiMaker('login'),
  register: apiMaker('register'),
  unstart: apiMaker('unstart'),
  past: apiMaker('past'),
  curr: apiMaker('curr'),
  content: apiMaker('content/:id'),
  voted: apiMaker('voted'),
  submit: apiMaker('submit'),
  search: apiMaker('search'),
  verify: apiMaker('verify')
}
