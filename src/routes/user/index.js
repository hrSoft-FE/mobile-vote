import React from 'react'
import { connect } from 'dva'
import './index.less'

const User = ({location, app, children, info}) => {
  return (
    <div>
      <div>
        info
      </div>
    </div>
  )
}

export default connect(({app, user}) => ({app, user}))(User)
