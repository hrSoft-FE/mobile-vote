import React from 'react'
import {
  NavBar, Icon
} from 'antd-mobile'

import styles from './header.less'

function Header ({location}) {
  const goBack = () => {
    let ref = document.referrer
    if (ref !== '' && ref !== 'undefined') {
      location.href = ref
    } else {
      location.href = window.history.back(-1)
    }
  }
  return (
    <div className={styles.normal}>
      <NavBar
        leftContent='返回'
        mode="light"
        onLeftClick={goBack}
        rightContent={[
          location.pathname === '/content' ? <Icon key="1" type="ellipsis" /> : null
        ]}
      >
        投票
      </NavBar>
    </div>
  )
}

export default Header
