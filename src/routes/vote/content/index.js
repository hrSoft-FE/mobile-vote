import React, { Component } from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import { List, Radio, Toast, WhiteSpace, Button, WingBlank, Checkbox } from 'antd-mobile'
import { getLocalTime } from '../../../utils'
import './index.less'

const RadioItem = Radio.RadioItem
const CheckboxItem = Checkbox.CheckboxItem

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
      <div>
        <WingBlank>
          <p style={{fontSize: '0.36rem'}}>{vote.title}</p>
        </WingBlank>
        <WingBlank>
          <p style={{fontSize: '0.28rem'}}>{vote.state}</p>
        </WingBlank>
        <WingBlank>
          <p style={{color: '#108ee9', fontSize: '0.28rem'}}>结束时间：{getLocalTime(vote.end_time / 1000)}</p>
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
