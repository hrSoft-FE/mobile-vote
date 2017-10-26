import React, { Component } from 'react'
import { Popover, NavBar, Icon, Toast } from 'antd-mobile'
import { goto } from '../../utils'
import copyToClipboard from 'copy-to-clipboard'

import styles from './header.less'

const Item = Popover.Item

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs"
                          alt="" />

class Header extends Component {
  state = {
    visible: false,
    selected: ''
  }
  onSelect = (opt) => {
    copyToClipboard(window.document.URL)
    Toast.success('复制内容成功;如果失败，请在输入框内手动复制')
    this.setState({
      visible: false,
      selected: opt.props.value
    })
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible
    })
  }
  goBack = () => {
    const {location} = this.props
    if (location.pathname === '/vote/password') {
      goto('/vote/doing')
    } else {
      location.href = window.history.back(-1)
    }
  }

  render () {
    const {location} = this.props
    return (
      <div className={styles.normal}>
        <NavBar
          leftContent='返回'
          mode="light"
          onLeftClick={this.goBack}
          rightContent={<Popover mask
                                 overlayClassName="fortest"
                                 overlayStyle={{color: 'currentColor'}}
                                 visible={this.state.visible}
                                 overlay={[
                                   (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
                                          style={{whiteSpace: 'nowrap'}}>分享</Item>)
                                 ]}
                                 align={{
                                   overflow: {adjustY: 0, adjustX: 0},
                                   offset: [-10, 0]
                                 }}
                                 onVisibleChange={this.handleVisibleChange}
                                 onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center'
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>}
        >
          投票
        </NavBar>
      </div>
    )
  }
}

export default Header
