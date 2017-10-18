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
import { toastFormMessage } from '../../../utils'
import { createForm } from 'rc-form'

const Item = List.Item
const Checkbox = ({app, checkbox, dispatch, form: {getFieldProps, validateFields, getFieldDecorator, getFieldError}}) => {
  const adds = () => {
    dispatch({type: 'checkbox/adds'})
  }
  const submit = (e) => {
    e.preventDefault()
    validateFields((errors, values) => {
      const errRes = toastFormMessage(errors, false,
        [
          'title',
          'problemList',
          'startAt',
          'endAt',
          'maxChoose',
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
          '9'])
      if (errRes) return
      const {title, startAt, endAt, description, isPublic, password, maxChoose} = values
      let problemList = []
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
        problemList,
        maxChoose,
      }
      dispatch({type: 'checkbox/create', payload: body})
    })
  }
  const getInput = (config = {}, index) => getFieldDecorator('' + index, {
    initialValue: config.value,
    rules: [
      {
        required: true,
        message: `请输入选项${index + 1}`
      }],
  })(<InputItem key={index} placeholder={config.placeholder}>
    <div onClick={() => dispatch({type: 'checkbox/remove', payload: index})}
         style={{
           backgroundImage: 'url(http://owu5k7u5s.bkt.clouddn.com/delete.png)',
           backgroundSize: 'cover',
           height: '0.38rem',
           width: '0.38rem',
         }} />
  </InputItem>)
  const onFocus = () => {
    checkbox.isKeys = !checkbox.isKeys
    console.log(checkbox.isKeys)
  }
  return (
    <form className='checkbox-wrapper'>
      <List>
        <WhiteSpace />
        {
          getFieldDecorator('title', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '请输入投票名',
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
        {checkbox.config.map((config, index) => getInput(config, index))}
        <WhiteSpace />
        <Item
          thumb='http://owu5k7u5s.bkt.clouddn.com/%E6%B7%BB%E5%8A%A0%20%281%29.png'
          onClick={adds}
        >
          <span style={{color: '#1296db'}}>添加选项</span>
        </Item>
        <WhiteSpace />
        {
          getFieldDecorator('maxChoose', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '请输入最多选择个数',
              }],
          })(<InputItem
            type='money'
            labelNumber='8'
            locale={{confirmLabel: '选择'}}
            onFocus={onFocus}
          >
            最多选择个数
          </InputItem>)
        }
      </List>
      <div style={{height: '0.80rem'}} />
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

export default connect(({app, add, checkbox}) => ({app, add, checkbox}))(
  createForm()(Checkbox))
