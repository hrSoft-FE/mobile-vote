import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { verify, toastFormMessage } from '../../../utils'
import avatar from '../../../assets/avatar.jpeg'
import style from '../index.less'
import { Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast, Flex, Card } from 'antd-mobile'
import { createForm } from 'rc-form'
import ListItem from './Item'
import mobileIcon from '../icon/Mobile-phone.png'
import passwordIcon from '../icon/password.png'
import confirmIcon from '../icon/confirm.png'
import mailIcon from '../icon/mail.png'
import verifyIcon from '../icon/verify.png'
import nameIcon from '../icon/name.png'

class Profile extends Component {
  render () {
    const {profile, dispatch, form: {getFieldDecorator}} = this.props
    const {userInfo: {mobile, name, gender}} = profile
    return (
      <div>
        <WhiteSpace size="sm"/>
        <Card full>
          <Card.Header
            title={
              <div style={{marginLeft: '.5rem'}}>
                <div className={style.nickName}>{name}</div>
                <div className={style.userMobile}>{mobile}</div>
              </div>
            }
            thumb={<div className={style.profileLogo}>
              <img src={avatar} alt="" className={style.img}/>
            </div>}
          />
        </Card>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <Card>
          <Card.Header
            title="我创建的投票"
            extra={<span>&gt;</span>}
          />
          <Card.Body>
            <ListItem/>
          </Card.Body>
        </Card><WhiteSpace size="lg"/>
        <Card>
          <Card.Header
            title="我参加的投票"
            extra={<span>&gt;</span>}
          />
          <Card.Body>
            <ListItem/>
          </Card.Body>
        </Card>

        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
      </div>
    )
  }
}

Profile.propTypes = {
  form: PropTypes.object,
  profile: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, profile, login}) => ({app, user, profile, login}))(createForm()(Profile))
