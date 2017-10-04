import React from 'react'
import { connect } from 'dva'
import './index.less'

const User = ({location, app, children, info}) => {
  console.log(children)
  return (
    <div className="user" style={{height: '100%'}}>
      {children}
    </div>
  )
}

export default connect(({app, user}) => ({app, user}))(User)
