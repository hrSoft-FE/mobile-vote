import React, { Component } from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import { routerRedux } from 'dva/router'
import { List, Radio, Toast, WhiteSpace, Button, WingBlank, Checkbox } from 'antd-mobile'
import { getLocalTime, goto } from '../../../utils'
import './index.less'

const RadioItem = Radio.RadioItem
const CheckboxItem = Checkbox.CheckboxItem

class Content extends Component {
  state = {
    value: null,
    moneyfocused: false
  }

  componentWillMount () {
    const {location, content, vote} = this.props
    const {query} = location
    const {isPublic} = content
    const {password = null} = vote
    if (query.status === 'will') {
      Toast.offline('投票未开始')
      goto(`/vote/will`)
    }
    if (isPublic === '1' && query.status !== 'will') {
      this.props.dispatch({type: 'vote/fetchVoteContent', payload: {id: query.id}})
    } else if (isPublic === '0' && query.status !== 'will') {
      this.props.dispatch({type: 'vote/fetchVoteContent', payload: {id: query.id, password: password}})
    }
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
        this.props.dispatch({type: 'vote/submitVote', payload: {body: {options: options}, id: id}})
        this.props.dispatch({type: 'vote/savePassword', payload: {password: null}})
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
    const {vote} = this.props
    const {getFieldProps} = this.props.form
    const {votes} = vote
    const {value} = this.state
    return (
      <div style={{marginTop: 10}}>
        <WingBlank>
          <span style={{fontSize: '0.36rem', lineHeight: '0.3rem'}}>{votes.title}</span>
        </WingBlank>
        <WingBlank>
          <p style={{color: '#108ee9', fontSize: '0.28rem'}}>结束时间：{getLocalTime(votes.endAt / 1000)}</p>
        </WingBlank>
        <List renderHeader={() => votes.type === 1 ? '单选' : '多选'}>
          {votes.type === 1 && votes.options.map(i => (
            <RadioItem key={i.id} checked={value === i.id} onChange={() => this.onChange(i.id)}>
              {i.title}
            </RadioItem>
          ))}
          {votes.type === 2 && votes.options.map(i => (
            <CheckboxItem key={i.id} {...getFieldProps(`${i.id}`)}>
              {i.title}
            </CheckboxItem>
          ))}
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button className="btn" type="primary"
                  style={{position: 'absolute', bottom: 0, left: 0, right: 0, margin: 20}}
                  onClick={() => this.submit(votes.maxChoose)}>提交</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect(({vote, content}) => ({vote, content}))(createForm()(Content))
