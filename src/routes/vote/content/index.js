import React, { Component } from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import { routerRedux } from 'dva/router'
import { Modal, List, Radio, Toast, WhiteSpace, Button, WingBlank, Checkbox } from 'antd-mobile'
import { getLocalTime } from '../../../utils'
import './index.less'

const RadioItem = Radio.RadioItem
const CheckboxItem = Checkbox.CheckboxItem
const prompt = Modal.prompt

class Content extends Component {
  state = {
    value: null,
    moneyfocused: false
  }
  onChange = (value) => {
    setTimeout(this.setState({
      value
    }), 0)
  }
  submit = (max) => {
    const {location} = this.props
    const {id} = location.query
    this.props.form.validateFields((error, value) => {
      let selectOption = []
      Object.keys(value).forEach(key => {
        if (value[key] === true) {
          selectOption.push(key)
        }
      })
      let options = selectOption.length === 0 ? [this.state.value] : selectOption
      let length = selectOption.length
      if ((length && length <= max) || this.state.value || this.state.value === 0) {
        this.props.dispatch({type: 'content/submitVote', payload: {body: {options: options}, id: id}})
      } else {
        if (max) {
          Toast.fail(`最多选${max}项`, 2)
        } else {
          Toast.fail(`您必须选一项`, 2)
        }
      }
    })
  }

  render () {
    const {content, location} = this.props
    const {getFieldProps} = this.props.form
    const {vote, isPublic} = content
    const {id} = location.query
    const {value} = this.state
    return (
      <div style={{marginTop: 10}}>
        {!isPublic && prompt(
          '输入密码',
          '该投票需要密码',
          password => this.props.dispatch({type: 'content/fetchVoteContent', payload: {id: id, password: password}}),
          'secure-text'
        )}
        <WingBlank>
          <span style={{fontSize: '0.36rem', lineHeight: '0.3rem'}}>{vote.title}</span>
        </WingBlank>
        <WingBlank>
          <p style={{color: '#108ee9', fontSize: '0.28rem'}}>结束时间：{getLocalTime(vote.endAt / 1000)}</p>
        </WingBlank>
        <List renderHeader={() => vote.type === 1 ? '单选' : '多选'}>
          {vote.type === 1 && vote.options.map(i => (
            <RadioItem key={i.id} checked={value === i.id} onChange={() => this.onChange(i.id)}>
              {i.title}
            </RadioItem>
          ))}
          {vote.type === 2 && vote.options.map(i => (
            <CheckboxItem key={i.id} {...getFieldProps(`${i.id}`)}>
              {i.title}
            </CheckboxItem>
          ))}
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button className="btn" type="primary"
                  style={{position: 'absolute', bottom: 0, left: 0, right: 0, margin: 20}}
                  onClick={() => this.submit(vote.max)}>提交</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect(({app, content}) => ({app, content}))(createForm()(Content))
