import React from 'react'
import { TabBar, Icon } from 'antd-mobile'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import addIconActive from './add-active.png'
import addIcon from './add.png'
import voteIcon from './survey.png'
import voteIconActive from './survey-active.png'
import accountIcon from './account.png'
import accountIconActive from './account-active.png'
import styles from './footer.less'

function Footer ({dispatch, childrens, location}) {
  const route = ['/vote/doing', '/vote/done', '/vote/will', '/add', '/user', '/user/login', '/user/profile']
  const need = ['/vote/doing', '/vote/done', '/vote/will']
  const userNavHighLight = ['/user', '/user/login', '/user/profile']
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
              title="创建"
              key="创建"
              icon={{uri: addIcon}}
              iconStyle={{width: 48, height: 48}}
              selectedIcon={{uri: addIconActive}}
              selected={location.pathname === '/add'}
              onPress={() => dispatch(routerRedux.push('/add'))}
            >
              {childrens}
            </TabBar.Item>
            <TabBar.Item
              title="我"
              key="我"
              icon={{uri: accountIcon}}
              selectedIcon={{uri: accountIconActive}}
              selected={userNavHighLight.indexOf(location.pathname) !== -1}
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
