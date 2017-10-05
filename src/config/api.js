const prefix = `api/votes/`
const apiMaker = path => `${prefix}${path}`

export default {
  userInfo: apiMaker('user'),
  login: apiMaker('login'),
  register: apiMaker('register'),
  will: apiMaker('will'),
  done: apiMaker('done'),
  doing: apiMaker('doing'),
  content: apiMaker('content/:id'),
  voted: apiMaker('voted'),
  submit: apiMaker('submit'),
  search: apiMaker('search'),
  verify: apiMaker('verify')
}
