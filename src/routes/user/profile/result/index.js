import React, { Component } from 'react'
import { connect } from 'dva'

class Result extends Component {
  render () {
    return (
      <div>
     result
      </div>
    )
  }
}

export default connect(({app, result}) => ({app, result}))(Result)
