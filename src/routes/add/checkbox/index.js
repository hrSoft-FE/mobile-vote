import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

const Checkbox = (app, radio) => {
  return (
    <div>checkbox</div>
  )
}

export default connect(({app, checkbox}) => ({app, checkbox}))(Checkbox)
