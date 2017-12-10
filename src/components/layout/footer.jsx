import React from 'react'
import { TabBar, Icon } from 'antd-mobile'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import addIconActive from './adds-active.png'
import addIcon from './adds.png'
import voteIcon from './survey.png'
import voteIconActive from './survey-active.png'
import accountIcon from './account.png'
import accountIconActive from './account-active.png'
import styles from './footer.less'
function Footer ({dispatch, childrens, location}) {
  const route = [
    '/vote/doing', '/vote/done', '/vote/will',
    '/add', '/add/radio', '/add/checkbox',
    '/user', '/user/login', '/user/profile', '/user/profile/panel', '/user/profile/created', '/user/profile/joined', '/user/profile/result'
  ]
  const need = ['/vote/doing', '/vote/done', '/vote/will']
  const userNavHighLight = ['/user', '/user/login', '/user/profile', '/user/profile/panel', '/user/profile/created', '/user/profile/joined', '/user/profile/result']
  const add = ['/add/radio', '/add/checkbox']
  return (
    <div className='normal'>
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
              onPress={() => dispatch(routerRedux.push('/vote/will'))}
            >
              {childrens}
            </TabBar.Item>
            <TabBar.Item
              title="创建"
              key="创建"
              icon={{uri: addIcon}}
              iconStyle={{width: 68, height: 68}}
              selectedIcon={{uri: addIconActive}}
              selected={add.indexOf(location.pathname) !== -1}
              onPress={() => dispatch(routerRedux.push('/add/radio'))}
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
