import React, { Component } from 'react'
import { connect } from 'dva'
import './index.less'

class Done extends Component {
  render () {
    const {} = this.props
    return (
      <div>
      </div>
    )
  }
}

export default connect(({app, vote, done}) => ({app, vote, done}))(Done)
