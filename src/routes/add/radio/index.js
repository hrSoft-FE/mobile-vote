import React from 'react'
import { connect } from 'dva'
import {
  List,
  InputItem,
  TextareaItem,
  Switch,
  WhiteSpace,
  WingBlank,
  Button,
  DatePicker,
} from 'antd-mobile'
import { createForm } from 'rc-form'
import { toastFormMessage } from '../../../utils'

const Item = List.Item
const Radio = ({app, radio, dispatch, form: {getFieldProps, validateFields, getFieldDecorator}}) => {
  console.log('radio')
  const adds = () => {
    dispatch({type: 'radio/adds'})
  }
  const submit = (e) => {
    e.preventDefault()
    validateFields((errors, values) => {
      const {title, startAt, endAt, description = '', isPublic, password = null} = values
      let problemList = []
      let maxChoose = 1
      const errRes = toastFormMessage(errors, false, [
        'title',
        'index',
        'startAt',
        'endAt',
        'password',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        10])
      if (errRes) return
      Object.keys(values).forEach(key => {
        if (+key >= 0) {
          problemList.push(values[key])
        }
      })
      let body = {
        title,
        startAt: startAt.valueOf(),
        endAt: endAt.valueOf(),
        description,
        type: 1,
        isPublic,
        password,
        maxChoose,
        problemList,
      }
      console.log('ok', body)
      dispatch({type: 'radio/create', payload: body})
    })
  }
  const getInput = (config = {}, index) => getFieldDecorator('' + index, {
    initialValue: config.value,
    rules: [
      {
        required: true,
        message: `请输入选项${index + 1}`,
      }],
  })(<InputItem key={index} placeholder={config.placeholder} labelNumber={2}>
    <div onClick={() => dispatch({type: 'radio/remove', payload: index})}
         style={{
           backgroundImage: 'url(http://owu5k7u5s.bkt.clouddn.com/delete.png)',
           backgroundSize: 'cover',
           height: '0.38rem',
           width: '0.38rem',
         }}
         key={index}
    />
  </InputItem>)
  return (
    <form className='radio-wrapper'>
      <List>
        <WhiteSpace />
        {
          getFieldDecorator('title', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '请输入投票标题',
              }],
          })(<InputItem placeholder='投票标题' />)
        }
        <WhiteSpace />
        {
          getFieldDecorator('description', {
            initialValue: '',
            rules: [
              {
                required: false,
                message: '补充描述',
              }],
          })(<TextareaItem placeholder='补充描述(可选)' rows='2' />)
        }
      </List>
      <WhiteSpace />
      <List>
        {radio.config.map((config, index) => getInput(config, index))}
        <WhiteSpace />
        <Item
          thumb='http://owu5k7u5s.bkt.clouddn.com/%E6%B7%BB%E5%8A%A0%20%281%29.png'
          onClick={adds}
        >
          <span style={{color: '#1296db'}}>添加选项</span>
        </Item>
      </List>
      <WhiteSpace />
      <List>
        {
          getFieldDecorator('startAt', {
            initialValue: '',
            rules: [
              {
                required: true,
                type: 'object',
                message: '请输入开始日期',
              }],
          })(
            <DatePicker
              mode='datetime'
              format={val => val.format('YYYY-MM-DD HH:mm')}
              extra='请选择开始日期'
            >
              <Item arrow='horizontal'>开始日期</Item>
            </DatePicker>)
        }
        <WhiteSpace />
        {
          getFieldDecorator('endAt', {
            initialValue: '',
            rules: [
              {
                required: true,
                type: 'object',
                message: '请输入截止日期',
              }],
          })(
            <DatePicker
              mode='datetime'
              format={val => val.format('YYYY-MM-DD HH:mm:ss')}
              extra='请选择截止日期'
            >
              <Item arrow='horizontal'>截止日期</Item>
            </DatePicker>)
        }
        <WhiteSpace />
        <Item
          extra={<Switch
            {...getFieldProps('isPublic', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            platform="android"
          />}
        >是否公开</Item>
        {
          (getFieldProps('isPublic').value === false) &&
          <span>
            {
              getFieldDecorator('password', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: '请输入投票密码',
                  }],
              })(<InputItem>投票密码</InputItem>)
            }
          </span>
        }
      </List>
      <WhiteSpace />
      <div style={{height: '0.60rem'}} />
      <WingBlank>
        <Button type='primary' style={{
          marginRight: '0.08rem',
          height: '0.80rem',
          lineHeight: '0.80rem',
        }} onClick={submit}>创建完成</Button>
      </WingBlank>
      <div style={{height: '1.40rem'}} />
    </form>
  )
}

export default connect(({app, add, radio}) => ({app, add, radio}))(
  createForm()(Radio))
