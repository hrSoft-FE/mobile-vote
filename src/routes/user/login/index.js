import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { verify, toastFormMessage } from '../../../utils'
import avatar from '../../../assets/avatar.jpeg'
import style from './index.less'
import { Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast, Flex } from 'antd-mobile'
import { createForm } from 'rc-form'
import mobileIcon from '../icon/Mobile-phone.png'
import passwordIcon from '../icon/password.png'
import confirmIcon from '../icon/confirm.png'
import mailIcon from '../icon/mail.png'
import verifyIcon from '../icon/verify.png'

const TabPane = Tabs.TabPane

function callback (key) {
  console.log('onChange', key)
}

function handleTabClick (key) {
  console.log('onTabClick', key)
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  render () {
    const {login, dispatch, form: {getFieldProps, getFieldError, getFieldDecorator}} = this.props
    const forgetPassword = (e) => {
      e.preventDefault()
      dispatch(routerRedux.push('/user/forget'))
    }
    const userLogin = () => {
      this.props.form.validateFields((error, value) => {
        const {loginPhone, loginPassword} = value
        const errRes = toastFormMessage(error, false, ['loginPhone', 'loginPassword'])
        console.log(errRes)
        if (errRes) return
        dispatch({type: 'login/login', payload: {phone: loginPhone, password: loginPassword}})
        Toast.loading('登录中', 2, () => {
          console.log('登录成功 !!!')
        })
      })
    }
    const userRegister = () => {
      this.props.form.validateFields((error, value) => {
        const {registerPhone, registerPassword, registerConfirm, registerVerify} = value
        const errRes = toastFormMessage(error, false, ['registerPhone', 'registerPassword', 'registerConfirm', 'registerVerify'])
        console.log(errRes)
        if (errRes) return
        if (registerPassword === registerConfirm) {
          Toast.loading('Loading...', 1, () => {
            console.log('Load complete !!!')
          })
          dispatch({
            type: 'login/register',
            payload: {
              phone: registerPhone,
              password: registerPassword,
              confirm: registerConfirm,
              verify: registerVerify
            }
          })
        } else {
          Toast.fail('两次密码输入不一致')
        }
      })
    }
    const sendVerify = () => {
      dispatch({type: 'user/getVerifyCode', payload: {}})
    }
    return (
      <div>
        <div className={style.banner}>
          <img src={avatar} alt="" className={style.img}/>
        </div>
        <Tabs style={{height: '100%'}} defaultActiveKey="2" animated={false} onChange={callback}
              onTabClick={handleTabClick} destroyInactiveTabPane={false}>
          <TabPane tab="登录" key="1">
            <div className={style.login}>
              <List key="login" style={{width: '80%'}}>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                {getFieldDecorator('loginPhone', {
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
                <WhiteSpace size="xl"/>
                {getFieldDecorator('loginPassword', {
                    rules: [
                      {min: 6, message: '密码最少是6位'},
                      {required: true, message: '请输入密码'}
                    ]
                    // initialValue: 15033517219
                  }
                )(<InputItem
                  placeholder="请输入密码"
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
                <WhiteSpace size="md"/>
                <div className={style.forgetWrapper}>
                  <div onClick={forgetPassword} className={style.forget}>忘记密码</div>
                </div>
                <WhiteSpace size="lg"/>
                <Button className="btn" type="primary" onClick={userLogin}>确认登录</Button>
              </List>
            </div>
          </TabPane>
          <TabPane tab="注册" key="2">
            <div className={style.register}>
              <List key='register' style={{width: '80%'}}>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                {getFieldDecorator('registerPhone', {
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
                {getFieldDecorator('registerPassword', {
                    rules: [
                      {min: 6, message: '密码最少是6位'},
                      {required: true, message: '请输入密码'}
                    ]
                    // initialValue: 15033517219
                  }
                )(<InputItem
                  placeholder="请输入密码"
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
                {getFieldDecorator('registerConfirm', {
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
                    ]
                    // initialValue: 12345
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
                <WhiteSpace size="lg"/>
                <Button className="btn" type="primary" onClick={userRegister}>注册账号</Button>
              </List>
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
      </div>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, login}) => ({app, user, login}))(createForm()(Login))
