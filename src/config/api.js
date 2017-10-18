const prefix = `http://vote.helloyz.cn/`
const apiMaker = path => `${prefix}${path}`
export default {
  userInfo: apiMaker('user/info'),
  login: apiMaker('user/login'),
  register: apiMaker('user/register'),
  updateInfo: apiMaker('user/update/password'),
  will: apiMaker('vote/list'),
  done: apiMaker('vote/list'),
  doing: apiMaker('vote/list'),
  content: apiMaker('vote/detail'),
  voted: apiMaker('voted'),
  submit: apiMaker('vote/part'),
  create: apiMaker('vote/create'),
  verify: apiMaker('verify'),
  verifyCode: apiMaker('verify-code'),
  forgetPassword: apiMaker('forget')
}
