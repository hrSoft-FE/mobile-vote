import { Toast } from 'antd-mobile'

const codeMap = {
  50004: '您已投过票',
  50003: '非公开投票需要密码'
}

export default (code) => {
  if (codeMap[code]) {
    Toast.offline(codeMap[code], 2)
  } else {
    Toast.offline('未知错误', 2)
  }
}
