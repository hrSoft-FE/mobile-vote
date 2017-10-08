const prefix = `api/votes/`
const apiMaker = path => `${prefix}${path}`
const prefixProd = 'http://192.168.0.120:3000/'
const apiMakerProd = path => `${prefixProd}${path}`
export default {
  userInfo: apiMaker('user'),
  login: apiMakerProd('user/login'),
  register: apiMakerProd('user/register'),
  will: apiMaker('will'),
  done: apiMaker('done'),
  doing: apiMaker('doing'),
  content: apiMaker('content'),
  voted: apiMaker('voted'),
  submit: apiMaker('submit'),
  search: apiMaker('search'),
  verify: apiMaker('verify'),
  verifyCode: apiMaker('verify-code'),
  updateInfo: apiMaker('update-info'),
  forgetPassword: apiMaker('forget')
}
