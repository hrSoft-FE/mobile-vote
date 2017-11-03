import React, { Component } from 'react'
import { connect } from 'dva'
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile'
import { createForm } from 'rc-form'
import './index.less'

class Password extends Component {
  submit = () => {
    const {location} = this.props
    const {id} = location.query
    this.props.form.validateFields((error, value) => {
      const {password} = value
      this.props.dispatch({type: 'vote/savePassword', payload: {password: password}})
      this.props.dispatch({type: 'vote/fetchVoteContent', payload: {id: id, password: password}})
    })
  }

  render () {
    const {form} = this.props
    const {getFieldProps} = form
    return (
      <div>
        <List renderHeader={() => '本投票需要密码'}>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="请输入密码"
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <Button className="btn" icon="check-circle-o" onClick={this.submit}>确认密码</Button>
      </div>
    )
  }
}

export default connect(({vote, password}) => ({vote, password}))(createForm()(Password))
