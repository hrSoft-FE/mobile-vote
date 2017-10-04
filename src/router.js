import React from 'react'
import App from './routes/app'
import { Router } from 'dva/router'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}
const registerModelByPath = (app, pathname) => {
  pathname.split('/').reduce((routers, route) => {
    const router = routers + '/' + (+route >= 0 ? '_id' : route)
    try {
      const model = require(`./routes${router}/model.js`)
      registerModel(app, model)
    } catch (e) {}
    return router
  })
}

const Routers = ({history, app}) => {
  const routes = [
    {
      path: '/',
      component: App,
      getChildRoutes ({location}, cb) {
        registerModelByPath(app, location.pathname)
        cb(null, (r => {
          return r.keys().map(key => r(key))
        })(require.context('./', true, /^\.\/routes\/((?!\/)[\s\S])+\/route\.js$/)))
      }
    },
    {
      path: '*',
      component: require('./routes/404')
    }]

  return <Router history={history} routes={routes} />
}

export default Routers
