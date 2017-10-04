import React from 'react'
import { TabBar, Icon } from 'antd-mobile'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import styles from './footer.less'

function Footer ({dispatch, childrens, location}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="投票"
          key="投票"
          icon={<Icon type={require('../../icons/static/survey.svg')}/>}
          selectedIcon={<Icon type={require('../../icons/static/survey.svg')}/>}
          selected={location.pathname === '/vote'}
          onPress={() => dispatch(routerRedux.push('/vote'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="搜索"
          key="搜索"
          icon={<Icon type="search"/>}
          selectedIcon={<Icon type="search"/>}
          selected={location.pathname === '/search'}
          onPress={() => dispatch(routerRedux.push('/search'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="我"
          key="我"
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/WdEuTLJOVzeABZlKYLmJ.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/sRkvMgIGXERtyRVyAsXP.png'}}
          selected={location.pathname === '/user'}
          onPress={() => dispatch(routerRedux.push('/user'))}
        >
          {childrens}
        </TabBar.Item>
      </TabBar>
    </div>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Footer)
