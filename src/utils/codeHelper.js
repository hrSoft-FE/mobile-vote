import { Toast } from 'antd-mobile'

const codeMap = {
  50004: '您已投过票',
  50003: '非公开投票需要密码',
  20004: '需要提前登陆'
}

export default (code) => {
  if (codeMap[code]) {
    Toast.offline(codeMap[code], 1)
  } else {
    Toast.offline('未知错误', 1)
  }
}
