const baseURL = 'http://localhost:3000/'
const prefix = `votes/`
const apiMaker = path => `${baseURL}${prefix}${path}`

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
