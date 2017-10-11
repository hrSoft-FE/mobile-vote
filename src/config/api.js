const baseURl = 'http://192.168.0.120:3000'
const apiMakers = path => `${baseURl}/${path}`
const prefix = `api/votes/`
const apiMaker = path => `${prefix}${path}`
const prefixProd = 'http://192.168.0.120:3000/'
const apiMakerProd = path => `${prefixProd}${path}`
const expressMaker = path => `http://localhost:3000/votes/${path}`
export default {
  userInfo: apiMakerProd('user/info'),
  login: apiMakerProd('user/login'),
  register: apiMakerProd('user/register'),
  updateInfo: apiMakerProd('user/update/password'),
  will: apiMaker('will'),
  done: apiMaker('done'),
  doing: apiMaker('doing'),
  content: apiMaker('content'),
  voted: apiMaker('voted'),
  submit: apiMaker('submit'),
  create: apiMakers('vote/create'),
  verify: apiMaker('verify'),
  verifyCode: apiMaker('verify-code'),
  forgetPassword: apiMaker('forget')
}
