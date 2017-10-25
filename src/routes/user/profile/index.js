import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { verify, toastFormMessage } from '../../../utils'
import avatar from '../../../assets/avatar.jpeg'
import style from '../index.less'
import { Tabs, WhiteSpace, WingBlank, InputItem, Icon, List, Button, Toast, Flex, Card } from 'antd-mobile'
import { createForm } from 'rc-form'
const Item = List.Item
const Brief = Item.Brief

class Profile extends Component {
  render () {
    const {profile, dispatch, form: {getFieldDecorator}, children} = this.props
    const {userInfo: {mobile, name, gender}} = profile

    const turnTo = (path) => {
      dispatch(routerRedux.push(`profile/${path}`))
    }

    return (
      <div>
        <WingBlank>
          <WhiteSpace size="sm"/>
          {children}
          <WhiteSpace size="xl"/>
          <WhiteSpace size="xl"/>
        </WingBlank>
      </div>
    )
  }
}

Profile.propTypes = {
  form: PropTypes.object,
  profile: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, profile, login, doing}) => ({app, user, profile, login, doing}))(createForm()(Profile))
