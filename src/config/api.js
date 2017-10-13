const baseURl = 'http://vote.helloyz.cn/'
const apiMakers = path => `${baseURl}/${path}`

export default {
  userInfo: apiMakers('user/info'),
  login: apiMakers('user/login'),
  register: apiMakers('user/register'),
  updateInfo: apiMakers('user/update/password'),
  will: apiMakers('will'),
  done: apiMakers('done'),
  doing: apiMakers('doing'),
  content: apiMakers('content'),
  voted: apiMakers('voted'),
  submit: apiMakers('submit'),
  create: apiMakers('vote/create'),
  verify: apiMakers('verify'),
  verifyCode: apiMakers('verify-code'),
  forgetPassword: apiMakers('forget')
}
