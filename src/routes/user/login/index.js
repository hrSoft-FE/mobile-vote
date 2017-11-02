import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { toastFormMessage } from '../../../utils'
import avatar from '../../../assets/avatar.jpeg'
import style from '../index.less'
import { Tabs, WhiteSpace, InputItem, List, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import mobileIcon from '../icon/Mobile-phone.png'
import passwordIcon from '../icon/password.png'
import confirmIcon from '../icon/confirm.png'
import nameIcon from '../icon/name.png'

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
    const {login, dispatch, form: {getFieldDecorator}} = this.props
    const forgetPassword = (e) => {
      e.preventDefault()
      dispatch(routerRedux.push('/user/forget'))
    }
    const userLogin = () => {
      this.props.form.validateFields((error, value) => {
        const {identifier, loginPassword} = value
        const errRes = toastFormMessage(error, false, ['identifier', 'loginPassword'])
        console.log(errRes)
        if (errRes) return
        // use the default client
        dispatch({type: 'login/login', payload: {identifier: identifier, password: loginPassword, client: 1}})
      })
    }
    const userRegister = () => {
      this.props.form.validateFields((error, value) => {
        // const {registerPhone, registerPassword, registerConfirm, registerVerify} = value
        const {registerPhone, registerPassword, registerConfirm, name} = value
        const errRes = toastFormMessage(error, false, ['registerPhone', 'registerPassword', 'registerConfirm', 'name'])
        console.log(errRes)
        if (errRes) return
        if (registerPassword === registerConfirm) {
          dispatch({
            type: 'login/register',
            payload: {
              mobile: registerPhone,
              password: registerPassword,
              // confirm: registerConfirm,
              name: name
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
        <Tabs style={{height: '100%'}} defaultActiveKey="1" animated={false} onChange={callback}
              onTabClick={handleTabClick} destroyInactiveTabPane={false}>
          <TabPane tab="登录" key="1">
            <div className={style.login}>
              <List key="login" style={{width: '80%'}}>
                <WhiteSpace size="xl"/>
                {getFieldDecorator('identifier', {
                    rules: [
                      {len: 11, message: '手机号码应该是11位'},
                      {required: true, message: '请输入手机号码'}
                    ]
                    // initialValue: 15033517219
                  }
                )(<InputItem
                  type="number"
                  labelNumber={2}
                  style={{marginTop: '0rem', border: 'none'}}
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
                {getFieldDecorator('loginPassword', {
                    rules: [
                      {min: 6, message: '密码最少是6位'},
                      {required: true, message: '请输入密码'}
                    ]
                    // initialValue: 15033517219
                  }
                )(<InputItem
                  placeholder="请输入密码"
                  style={{border: 'none'}}
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
                {/*因为没有修改密码的需求，所以去掉了*/}
                {/*<div className={style.forgetWrapper}>*/}
                {/*<div onClick={forgetPassword} className={style.forget}>忘记密码</div>*/}
                {/*</div>*/}
                <WhiteSpace size="lg"/>
                <Button className="btn" type="primary" style={{marginBottom: '50px'}} onClick={userLogin}>确认登录</Button>
              </List>
            </div>
          </TabPane>
          <TabPane tab="注册" key="2">
            <div className={style.register}>
              <List key='register' style={{width: '80%'}}>
                <WhiteSpace size="xl"/>
                {getFieldDecorator('name', {
                    rules: [
                      {required: true, message: '请输入用户名称'}
                    ]
                    // initialValue: 15033517219
                  }
                )(<InputItem
                  type="string"
                  labelNumber={2}
                  style={{marginTop: '0rem', border: 'none'}}
                  placeholder="请输入用户名"
                >
                  <div style={{
                    backgroundImage: `url(${nameIcon})`,
                    backgroundSize: 'cover',
                    height: '0.44rem',
                    width: '0.44rem'
                  }}/>
                </InputItem>)}
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
                  style={{marginTop: '0rem', border: 'none'}}
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
                  style={{border: 'none'}}
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
                  style={{border: 'none'}}
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
                {/*<WhiteSpace size="xl"/>*/}
                {/*{getFieldDecorator('registerVerify', {*/}
                {/*rules: [*/}
                {/*{required: true, message: '请输入验证码'}*/}
                {/*]*/}
                {/*// initialValue: 12345*/}
                {/*}*/}
                {/*)(<Flex justify="between"><InputItem*/}
                {/*placeholder="请输入验证码"*/}
                {/*className={style.verify}*/}
                {/*style={{border: 'none', borderBottom: '2px solid #666'}}*/}
                {/*type="password"*/}
                {/*labelNumber={2}*/}
                {/*>*/}
                {/*<div style={{*/}
                {/*backgroundImage: `url(${verifyIcon})`,*/}
                {/*backgroundSize: 'cover',*/}
                {/*height: '0.44rem',*/}
                {/*width: '0.44rem'*/}
                {/*}}/>*/}
                {/*</InputItem>*/}
                {/*<Button className={style.verifyBtn} onClick={sendVerify}>发送验证码</Button>*/}
                {/*</Flex>)}*/}
                <WhiteSpace size="xl"/>
                <Button className="btn" type="primary" style={{marginBottom: '50px'}} onClick={userRegister}>注册账号</Button>
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
