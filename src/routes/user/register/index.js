import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import PropTypes from 'prop-types'
import { verify } from '../../../utils/index'
import './index.less'
import { Button, Icon } from 'antd-mobile'

const Register = ({register, dispatch}) => {
  const {loading} = register
  console.log('test')
  return (
    <div className='register-title'>
      <div className='register-title-main'>CCPC竞赛</div>
      <div className='register-title-sub'>^_^老王注册端-_-|</div>
    </div>)
}
Register.propTypes = {
  form: PropTypes.object,
  Register: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({app, user, register}) => ({app, user, register}))(Register)
