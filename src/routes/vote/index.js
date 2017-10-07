import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Tabs, WhiteSpace, Badge, SegmentedControl, WingBlank } from 'antd-mobile'
import './index.less'

const TabPane = Tabs.TabPane

class Vote extends Component {
  handleTabClick = (key) => {
    console.log('onTabClick', key)
    this.props.dispatch(routerRedux.push(`/vote/${key}`))
    this.props.dispatch({type: 'saveStatus', payload: key})
  }

  render () {
    const {app, vote, children, location} = this.props
    const route = ['/vote/doing', '/vote/done', '/vote/will']
    return (
      <div>
        <WhiteSpace />
        <WingBlank>
          {
            route.indexOf(location.pathname) !== -1 &&
            <div>
              <Tabs defaultActiveKey="doing" onTabClick={this.handleTabClick}>
                <TabPane tab={<Badge>进行中</Badge>} key="doing" />
                <TabPane tab={<Badge>未开始</Badge>} key="will" />
                <TabPane tab={<Badge>已结束</Badge>} key="done" />
              </Tabs>
            </div>
          }
          {
            children
          }
        </WingBlank>
      </div>
    )
  }
}

export default connect(({app, vote}) => ({app, vote}))(Vote)
