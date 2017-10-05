import React, { Component } from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import { List, Radio, InputItem, Flex, WhiteSpace, Button, WingBlank, Checkbox } from 'antd-mobile'
import './index.less'

const RadioItem = Radio.RadioItem
const CheckboxItem = Checkbox.CheckboxItem

class VoteContent extends Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    moneyfocused: false,
    type: 'money'
  }
  onChange = (value) => {
    console.log(value)
    this.setState({
      value
    })
  }

  render () {
    const {getFieldProps} = this.props.form
    const data = [
      {value: 0, label: 'Doctor'},
      {value: 1, label: 'Bachelor'}
    ]
    const {value, type} = this.state
    return (
      <div>
        <WingBlank>
          <p className="title">Basic Range</p>
        </WingBlank>
        <List renderHeader={() => '单选'}>
          {data.map(i => (
            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
          {data.map(i => (
            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
          {data.map(i => (
            <InputItem
              key={i.value}
              {...getFieldProps('money2', {
                normalize: (v, prev) => {
                  if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                    if (v === '.') {
                      return '0.'
                    }
                    return prev
                  }
                  return v
                }
              })}
              type={type}
              placeholder="money format"
              onFocus={() => {
                this.setState({
                  moneyfocused: false
                })
              }}
              focused={this.state.moneyfocused}
            >{i.label}</InputItem>
          ))}
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button className="btn" type="primary"
                  style={{position: 'absolute', bottom: 0, left: 0, right: 0, margin: 20}}>提交</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect(({app, content}) => ({app, content}))(createForm()(VoteContent))
