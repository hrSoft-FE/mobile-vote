import request from './request'
import { color } from './theme'
import { dateFormat, newDate } from './dateAbout'
import config from './config'
import { goto, queryURL, sleep, urlEncode, windowScroll } from './routerAbout'
import { arrayToTree, queryArray, withInArray } from './arrayAbout'
import API from '../config/api'
import verify from './verify'
import codeHelper from './codeHelper'

export {
  request,
  color,
  goto,
  dateFormat,
  newDate,
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
  urlEncode
}
