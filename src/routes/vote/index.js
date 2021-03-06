import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Tabs, WhiteSpace, Badge, WingBlank, Icon } from 'antd-mobile'

const TabPane = Tabs.TabPane

class Vote extends Component {
  handleTabClick = (key) => {
    this.props.dispatch(routerRedux.push(`/vote/${key}`))
  }

  render () {
    const {app, vote, children, location} = this.props
    const route = ['/vote/doing', '/vote/will']
    return (
      <div style={{backgroundColor: '#F5F5F9'}}>
        <WhiteSpace />
        <WingBlank>
          {
            route.indexOf(location.pathname) !== -1 &&
            <div>
              <Tabs defaultActiveKey={location.pathname === '/vote/doing' ? 'doing' : 'will'}
                    onTabClick={this.handleTabClick}>
                <TabPane tab={<Badge>未开始</Badge>} key="will" />
                <TabPane tab={<Badge>进行中</Badge>} key="doing" />
                {/*<TabPane tab={<Badge>已结束</Badge>} key="done" />*/}
              </Tabs>
              <div>
                <Icon type='up' onClick={() => { window.scrollTo(0, 0) }} style={{
                  width: '10vw',
                  height: '10vw',
                  backgroundColor: '#F5F5F9',
                  position: 'fixed',
                  bottom: '20vw',
                  right: '5vw',
                  border: '1vw solid #FFF'
                }} />
              </div>
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
