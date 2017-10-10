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
import { routerRedux } from 'dva/router'
import { createForm } from 'rc-form'
import moment from 'moment'
import 'moment/locale/zh-cn'

const Item = List.Item
const zhNow = moment().locale('zh-cn').utcOffset(8)
const Radio = ({app, radio, dispatch, form: {getFieldProps, getFieldValue, validateFields, setFieldsValue, getFieldDecorator, getFieldError}}) => {
  const add = () => {
    dispatch({type: 'radio/add'})
  }
  const submit = (e) => {
    e.preventDefault()
    validateFields((error, values) => {
      if (!error) {
        console.log('ok', values)
        let arr = []
        Object.keys(values).forEach(key => {
          if (+key >= 0) {
            arr.push(values[key])
          }
        })
      } else {
        console.log('error', error, values)
      }
    })
  }
  const getInput = (config = {}, index) => getFieldDecorator('' + index, {
    initialValue: config.value,
  })(<InputItem key={index} placeholder={config.placeholder}>
    <div onClick={() => dispatch({type: 'radio/remove', payload: index})}
         style={{
           backgroundImage: 'url(http://owu5k7u5s.bkt.clouddn.com/delete.png)',
           backgroundSize: 'cover',
           height: '0.38rem',
           width: '0.38rem',
         }} />
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
                requiredMessage: '请输入投票名',
              }]
          })(<InputItem placeholder='投票标题' />)
        }
        <WhiteSpace />
        {
          getFieldDecorator('description', {
            initialValue: '',
            rules: [
              {
                required: false,
                message: '补充描述'
              }],
          })(<TextareaItem placeholder='补充描述(可选)' rows='2' />)
        }
        <WhiteSpace />
      </List>
      <List>
        {radio.config.map((config, index) => getInput(config, index))}
        <WhiteSpace />
        <Item
          thumb='http://owu5k7u5s.bkt.clouddn.com/%E6%B7%BB%E5%8A%A0%20%281%29.png'
        >
          <button onClick={add} style={{color: '#1296db'}}>添加选项</button>
        </Item>
      </List>
      <div style={{height: '0.80rem'}} />
      <List>
        <DatePicker
          mode='datetime'
          value={zhNow}
          // minDate={moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8)}
        >
          {
            getFieldDecorator('startTime', {
              initialValue: 'zhNow',
              rules: [
                {
                  required: true,
                  requiredMessage: '请输入开始日期',
                }]
            })(<Item arrow='horizontal'>开始日期</Item>)
          }
        </DatePicker>
        <WhiteSpace />
        <DatePicker
          mode='datetime'
          value={zhNow}
          // minDate={moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8)}
        >
          {
            getFieldDecorator('endTime', {
              initialValue: '',
              rules: [
                {
                  required: true,
                  requiredMessage: '请输入截止日期',
                }],
            })(<Item arrow='horizontal'>截止日期</Item>)
          }
        </DatePicker>
        <WhiteSpace />
        <Item
          extra={<Switch
            {...getFieldProps('isPublic', {
              initialValue: true,
              valuePropName: 'checked'
            })}
            onClick={(checked) => { console.log(checked) }}
          />}
        >是否公开</Item>
      </List>
      <div style={{height: '0.30rem'}} />
      <WingBlank>
        <Button type='primary' style={{
          marginRight: '0.08rem',
          height: '0.80rem',
          lineHeight: '0.80rem',
        }} onClick={submit}>完成</Button>
      </WingBlank>
    </form>
  )
}

export default connect(({app, radio}) => ({app, radio}))(createForm()(Radio))
