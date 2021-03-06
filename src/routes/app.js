import React from 'react'
import { connect } from 'dva'
import NProgress from 'nprogress'
import Layout from '../components/layout/main.jsx'

const App = (props) => {
  const {children, loading, location} = props
  NProgress.start()
  !loading.global && NProgress.done()
  return (
    <Layout children={children} location={location}>
      {children}
    </Layout>
  )
}

export default connect(({loading, app}) => ({loading, app}))(App)
