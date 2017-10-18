import axios from 'axios'
import { Toast } from 'antd-mobile'
import { API, codeHelper } from './'

const fetch = options => {
  let {
    method = 'get',
    data,
    url,
    token = false
  } = options
  const header = token ? {'token': window.localStorage.getItem('token')} : {}
  const myAxios = axios.create({
    timeout: 15000,
    headers: header
  })
  switch (method.toLowerCase()) {
    case 'get':
      return myAxios.get(url, {
        params: data
      })
    case 'delete':
      return myAxios.delete(url, {
        data: data
      })
    case 'post':
      return myAxios.post(url, data)
    case 'put':
      return myAxios.put(url, data)
    case 'patch':
      return myAxios.patch(url, data)
    case 'export':
      return myAxios.get(url, {
        params: data,
        responseType: 'blob'
      })
    default:
      return myAxios(options)
  }
}

export default async options => {
  try {
    const res = await fetch(options)
    const {data} = res
    if (data.code !== 0) {
    }
    return data
  } catch (e) {
    throw (e)
  }
}
