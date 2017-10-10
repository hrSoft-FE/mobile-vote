import request from './request'
import { color } from './theme'
import { dateFormat, newDate } from './dateAbout'
import config from './config'
import { goto, queryURL, sleep, urlEncode, windowScroll } from './routerAbout'
import { arrayToTree, queryArray, withInArray } from './arrayAbout'
import { toastFormMessage } from './toastFormMesage'
import { getLocalTime } from './time'
import API from '../config/api'
import verify from './verify'
import codeHelper from './codeHelper'

export {
  request,
  color,
  goto,
  dateFormat,
  newDate,
  getLocalTime,
  config,
  arrayToTree,
  queryArray,
  withInArray,
  windowScroll,
  API,
  queryURL,
  codeHelper,
  sleep,
  verify,
  urlEncode,
  toastFormMessage
}
