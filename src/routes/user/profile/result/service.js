import { API, request } from '../../../../utils'

const getCreatedStatistics = async (id) => request({
  url: API.createdStatistics + `/${id}`,
  method: 'get',
  token: true
})

export {
  getCreatedStatistics
}
