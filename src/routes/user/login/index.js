import React, { Component } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import PropTypes from 'prop-types'
import { verify } from '../../../utils/index'
import avatar from '../../../assets/avatar.jpeg'
import style from './index.less'
import { Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import mobileIcon from './Mobile-phone.png'
import passwordIcon from './password.png'
import confirmIcon from './confirm.png'
import mailIcon from './mail.png'

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

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits')
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true
      })
    } else {
      this.setState({
        hasError: false
      })
    }
    this.setState({
      value
    })
  }

  render () {
    const {login, dispatch, form: {getFieldProps, getFieldError, getFieldDecorator}} = this.props
    let errors
    const userLogin = () => {
      this.props.form.validateFields((error, value) => {
        if (error) {console.log(error)} else {console.log(value)}
      })
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
                <WhiteSpace size="xl"/>
                {getFieldDecorator('loginPhone', {
                    rules: [
                      {len: 11, message: '手机号码应该是11位'},
                      {required: true, message: '请输入手机号码'}
                    ]
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
                <div style={{color: 'red', fontWeight: '100', fontSize: '30px'}}>
                  {(getFieldError('loginPhone') || []).join(', ')}
                </div>
                <WhiteSpace size="xl"/>
                {getFieldDecorator('loginPassword', {
                    rules: [
                      {len: 11, message: '手机号码应该是11位'},
                      {required: true, message: '请输入手机号码'}
                    ]
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
                <div style={{color: 'red', fontWeight: '100', fontSize: '30px'}}>
                  {(getFieldError('loginPassword') || []).join(', ')}
                </div>
                <WhiteSpace size="xl"/>
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
                <div style={{color: 'red', fontWeight: '100', fontSize: '30px'}}>
                  {(getFieldError('registerPhone') || []).join(', ')}
                </div>
                <WhiteSpace size="xl"/>
                <InputItem
                  {...getFieldProps('registerPassword')}
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
                </InputItem><WhiteSpace size="xl"/>
                <InputItem
                  {...getFieldProps('registerConfirm')}
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
                </InputItem>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="lg"/>
                <Button className="btn" type="primary">注册账号</Button>
              </List>
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace size="xl"/>
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
