import { Toast } from 'antd-mobile'

/**
 * Toast 错误信息
 * @param {object} error error对象，由this.props.form.validateFields 提供
 * @param {[string]} itemArr field名称构成的数组,默认为空
 * @param {boolean} singleModel 是否只toast一条信息，默认为 true
 * @param {boolean} all 是否处理全部的error信息，默认为 false,此时itemArr失效
 * @param {number} time toast默认时间为1s
 * @return {boolean} 是否有错误
 * @constructor
 */
export const toastFormMessage = (error, all = true, itemArr = [], singleModel = true, time = 1) => {
  if (error) {
    let errorKeyArr = itemArr
    if (all) {
      errorKeyArr = Object.keys(error)
    }
    let message = []
    errorKeyArr.forEach((item) => {
      console.log(item)
      if (error[item.toString()]) {
        const errorItem = error[item.toString()]['errors']
        console.log(errorItem)
        errorItem.forEach(item => {
          console.log(item)
          message.push(item['message'])
        })
      }
    })
    if (message.length) {
      if (singleModel) {
        Toast.info(message[0], time)
      } else {
        message.forEach(item => {
          Toast.info(item, time)
        })
      }
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
// TODO: 函数式编程？
const getErrorMessage = (error, item) => {
  let message = []
  if (error[item.toString()]) {
    const errorItem = error[item.toString()]['errors']
    console.log(errorItem)
    errorItem.forEach(item => {
      message.push(item['message'])
    })
  }
  return message
}
