import React from 'react'
import { connect } from 'dva'
import './index.less'

const Info = ({location, app, children, info}) => {
  return (
    <div>
      <div>
        info
      </div>
    </div>
  )
}

export default connect(({app, info}) => ({app, info}))(Info)
