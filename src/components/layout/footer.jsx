import React from 'react'
import { TabBar, Icon } from 'antd-mobile'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import searchIconActive from './search-active.png'
import searchIcon from './search.png'
import voteIcon from './survey.png'
import voteIconActive from './survey-active.png'
import accountIcon from './account.png'
import accountIconActive from './account-active.png'
import styles from './footer.less'

function Footer ({dispatch, childrens, location}) {
  const route = ['/vote/doing', '/vote/done', '/vote/will', '/search', '/user', '/user/login']
  const need = ['/vote/doing', '/vote/done', '/vote/will']
  return (
    <div>
      {
        route.indexOf(location.pathname) !== -1 && <div className={styles.normal}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={false}
          >
            <TabBar.Item
              title="投票"
              key="投票"
              icon={{uri: voteIcon}}
              selectedIcon={{uri: voteIconActive}}
              selected={need.indexOf(location.pathname) !== -1}
              onPress={() => dispatch(routerRedux.push('/vote/doing'))}
            >
              {childrens}
            </TabBar.Item>
            <TabBar.Item
              title="搜索"
              key="搜索"
              icon={{uri: searchIcon}}
              selectedIcon={{uri: searchIconActive}}
              selected={location.pathname === '/search'}
              onPress={() => dispatch(routerRedux.push('/search'))}
            >
              {childrens}
            </TabBar.Item>
            <TabBar.Item
              title="我"
              key="我"
              icon={{uri: accountIcon}}
              selectedIcon={{uri: accountIconActive}}
              selected={location.pathname === '/user/login'}
              onPress={() => dispatch(routerRedux.push('/user'))}
            >
              {childrens}
            </TabBar.Item>
          </TabBar>
        </div>
      }
    </div>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Footer)
