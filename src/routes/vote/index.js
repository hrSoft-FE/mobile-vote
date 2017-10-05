import React, { Component } from 'react'
import { connect } from 'dva'
import { Tabs, WhiteSpace, Badge, SegmentedControl, WingBlank } from 'antd-mobile'
import VoteList from './voteList'
import './index.less'

// const TabPane = Tabs.TabPane

class Vote extends Component {
  onChange = (e) => {
    let value = ''
    switch (e.nativeEvent.selectedSegmentIndex) {
      case 0:
        value = 'doing'
        break
      case 1:
        value = 'will'
        break
      case 2:
        value = 'done'
        break
      default:
        value = ''
    }
    this.props.dispatch({type: 'upDateList', payload: value})
  }

  render () {
    const {app, vote, children, location} = this.props
    const route = ['/vote', '/search', '/info']
    return (
      <div>
        <WhiteSpace />
        {
          route.indexOf(location.pathname) !== -1 && <WingBlank>
            <SegmentedControl
              values={['进行中', '未开始', '已结束']}
              onChange={this.onChange}
            />
            <VoteList />
          </WingBlank>
        }
        {
          children
        }
      </div>
    )
  }
}

export default connect(({app, vote}) => ({app, vote}))(Vote)
