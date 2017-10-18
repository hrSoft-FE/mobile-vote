import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Tabs, WingBlank, WhiteSpace } from 'antd-mobile'
import './index.less'

const TabPage = Tabs.TabPane
const Add = ({add, children, dispatch}) => {
  const route = ['/add/radio', '/add/checkbox']
  const handleTabClick = (key) => {
    dispatch(routerRedux.push(`/add/${key}`))
  }
  return (
    <div className='add-wrapper'>
      <WhiteSpace />
      <WingBlank>
        {
          route.indexOf(location.pathname !== -1) &&
          <div>
            <Tabs defaultActiveKey='radio' onTabClick={handleTabClick}>
              <TabPage tab='单选投票' key='radio' />
              <TabPage tab='多选投票' key='checkbox' />
            </Tabs>
          </div>
        }
        {children}
      </WingBlank>
    </div>
  )
}

export default connect(({app, add}) => ({app, add}))(Add)
