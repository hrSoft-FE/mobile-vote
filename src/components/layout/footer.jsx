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
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png'}}
          selected={location.pathname === '/vote'}
          onPress={() => dispatch(routerRedux.push('/vote'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="搜索"
          key="搜索"
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
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
          selected={location.pathname === '/info'}
          onPress={() => dispatch(routerRedux.push('/info'))}
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
