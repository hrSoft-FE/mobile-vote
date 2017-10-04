import React from 'react'
import { connect } from 'dva'
import './index.less'

const Vote = ({location, app, children, vote}) => {
  return (
    <div>
      <div>
        vote
      </div>
    </div>
  )
}

export default connect(({app, vote}) => ({app, vote}))(Vote)
