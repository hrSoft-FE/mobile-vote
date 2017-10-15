import React, { Component } from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
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
    this.setState({
      value
    })
  }
  submit = (max) => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value, max)
      let selectOption = []
      Object.keys(value).forEach(key => {
        if (value[key] === true) {
          selectOption.push(key)
        }
      })
      let length = selectOption.length
      console.log(length)
      if ((length && length <= max) || this.state.value || this.state.value === 0) {
        console.log('success') // 这里写提交函数
      } else {
        console.log(this.state.value)
        if (max) {
          Toast.fail(`最多选${max}项`, 2)
        } else {
          Toast.fail(`您必须选一项`, 2)
        }
      }
    })
  }

  render () {
    const {app, content, children, location} = this.props
    const {getFieldProps} = this.props.form
    const {vote} = content
    const {value} = this.state
    return (
      <div style={{marginTop: 10}}>
        {/*<Button onClick={() => prompt(*/}
        {/*'输入密码',*/}
        {/*'该投票需要密码',*/}
        {/*password => console.log(`password: ${password}`),*/}
        {/*'secure-text'*/}
        {/*)}*/}
        {/*>输入框密码形式</Button>*/}
        <WingBlank>
          <span style={{fontSize: '0.36rem', lineHeight: '0.3rem'}}>{vote.title}</span>
          <span style={{
            fontSize: '0.28rem',
            backgroundColor: '#108ee9',
            color: vote.state === '已开始' ? '#FFFFFF' : '#E9AA38',
            padding: '0.1rem',
            lineHeight: '0.3rem',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
          }}>{vote.state}</span>
        </WingBlank>
        <WingBlank>
          <p style={{color: '#108ee9', fontSize: '0.28rem'}}>结束时间：{getLocalTime(vote.end_time)}</p>
        </WingBlank>
        <List renderHeader={() => vote.type === 0 ? '单选' : '多选'}>
          {vote.type === 0 && vote.content.map(i => (
            <RadioItem key={i.key} checked={value === i.key} onChange={() => this.onChange(i.key)}>
              {i.text}
            </RadioItem>
          ))}
          {vote.type === 1 && vote.content.map(i => (
            <CheckboxItem key={i.key} {...getFieldProps(`${i.key}`)}>
              {i.text}
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
