import React, { Component } from 'react'
import { connect } from 'dva'
import { Tabs, WhiteSpace, Badge, SegmentedControl, WingBlank } from 'antd-mobile'
import './index.less'
import VoteList from '../voteList/index'

class Will extends Component {
  render () {
    const {} = this.props
    return (
      <div>
        <VoteList />
      </div>
    )
  }
}

export default connect(({app, vote}) => ({app, vote}))(Will)
