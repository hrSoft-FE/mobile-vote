import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import PropTypes from 'prop-types'
import { verify } from '../../utils'
import './index.less'
import { Button, Icon } from 'antd-mobile'

const Login = ({login, dispatch}) => {
  const {loading} = login
  console.log('test')
  return (
    <div className='login-title'>
      <span className='login-title-main'>CCPC竞赛</span>
      <span className='login-title-sub'>^_^老王管理端-_-|</span>
    </div>)
}
Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, login}) => ({app, user, login}))(Login)
