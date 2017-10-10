const prefix = `api/votes/`
const apiMaker = path => `${prefix}${path}`

export default {
  userInfo: apiMaker('user'),
  login: apiMaker('login'),
  register: apiMaker('register'),
  will: apiMaker('will'),
  done: apiMaker('done'),
  doing: apiMaker('doing'),
  content: apiMaker('content'),
  voted: apiMaker('voted'),
  submit: apiMaker('submit'),
  add: apiMaker('add'),
  verify: apiMaker('verify'),
  verifyCode: apiMaker('verify-code'),
  updateInfo: apiMaker('update-info'),
  forgetPassword: apiMaker('forget')
}
