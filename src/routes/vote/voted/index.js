import React from 'react'
import { connect } from 'dva'
import './index.less'

function Voted ({dispatch, location, content}) {
  return (
    <div>
      <div>hi</div>
    </div>
  )
}

export default connect(({content}) => ({content}))(Voted)
