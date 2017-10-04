import React from 'react'
import {
  NavBar, Icon
} from 'antd-mobile'

import styles from './header.less'

function Header ({location}) {
  return (
    <div className={styles.normal}>
      <NavBar
        leftContent="返回"
        mode="light"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="1" type="ellipsis" />
        ]}
      >
        投票
      </NavBar>
    </div>
  )
}

export default Header
