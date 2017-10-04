import React from 'react'
import { connect } from 'dva'
import './index.less'

const User = ({location, app, children, info}) => {
  console.log(children)
  return (
    <div>
      <div>
        {children || '暂无数据'}
      </div>
    </div>
  )
}

export default connect(({app, user}) => ({app, user}))(User)
