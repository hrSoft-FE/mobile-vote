import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { verify, toastFormMessage } from '../../../utils'
import avatar from '../../../assets/avatar.jpeg'
import style from '../index.less'
import { Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast, Flex } from 'antd-mobile'
import { createForm } from 'rc-form'
import mobileIcon from '../icon/Mobile-phone.png'
import passwordIcon from '../icon/password.png'
import confirmIcon from '../icon/confirm.png'
import mailIcon from '../icon/mail.png'
import verifyIcon from '../icon/verify.png'

class Update extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  render () {
    const {user, dispatch, form: {getFieldDecorator}} = this.props
    const sendVerify = () => {
      dispatch({type: 'user/getVerifyCode', payload: {}})
    }
    const userUpdate = () => {
      this.props.form.validateFields((error, value) => {
        const {password, confirm, phone} = value
        const errRes = toastFormMessage(error)
        console.log(errRes)
        if (errRes) return
        if (password === confirm) {
          try {
            dispatch({
              type: 'user/forget',
              payload: value
            })
            // dispatch(routerRedux.push('/user/login'))
          } catch (e) {
            console.error(e)
          }
        } else {
          Toast.fail('两次密码输入不一致')
        }
      })
    }
    return (
      <div>
        <div className={style.banner}>
          <img src={avatar} alt="" className={style.img}/>
        </div>
        <div className={style.register}>
          <List key='register' style={{width: '80%'}}>
            <WhiteSpace size="xl"/>
            <WhiteSpace size="xl"/>
            {getFieldDecorator('phone', {
                rules: [
                  {len: 11, message: '手机号码应该是11位'},
                  {required: true, message: '请输入手机号码'}
                ]
                // initialValue: 15033517219
              }
            )(<InputItem
              type="number"
              labelNumber={2}
              style={{marginTop: '0rem', border: 'none', borderBottom: '2px solid #666'}}
              placeholder="请输入手机号"
            >
              <div style={{
                backgroundImage: `url(${mobileIcon})`,
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem'
              }}/>
            </InputItem>)}
            <WhiteSpace size="xl"/>
            {getFieldDecorator('password', {
                rules: [
                  {min: 6, message: '密码最少是6位'},
                  {required: true, message: '请输入新密码'}
                ]
                // initialValue: 15033517219
              }
            )(<InputItem
              placeholder="请输入新密码"
              style={{border: 'none', borderBottom: '2px solid #666'}}
              type="password"
              labelNumber={2}
            >
              <div style={{
                backgroundImage: `url(${passwordIcon})`,
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem'
              }}/>
            </InputItem>)}
            <WhiteSpace size="xl"/>
            {getFieldDecorator('confirm', {
                rules: [
                  {required: true, message: '请再次输入密码'}
                ]
                // initialValue: 15033517219
              }
            )(<InputItem
              placeholder="请确认密码"
              style={{border: 'none', borderBottom: '2px solid #666'}}
              type="password"
              labelNumber={2}
            >
              <div style={{
                backgroundImage: `url(${confirmIcon})`,
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem'
              }}/>
            </InputItem>)}
            <WhiteSpace size="xl"/>
            {getFieldDecorator('registerVerify', {
                rules: [
                  {required: true, message: '请输入验证码'}
                ],
                initialValue: 12345
              }
            )(<Flex justify="between"><InputItem
              placeholder="请输入验证码"
              className={style.verify}
              style={{border: 'none', borderBottom: '2px solid #666'}}
              type="password"
              labelNumber={2}
            >
              <div style={{
                backgroundImage: `url(${verifyIcon})`,
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem'
              }}/>
            </InputItem>
              <Button className={style.verifyBtn} onClick={sendVerify}>发送验证码</Button>
            </Flex>)}
            <WhiteSpace size="xl"/>
            <WhiteSpace size='lg'/>
            <Button className={style.resetBtn} onClick={userUpdate}>重置密码</Button>
          </List>
        </div>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
      </div>
    )
  }
}

Update.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, forget}) => ({app, user, forget}))(createForm()(Update))
