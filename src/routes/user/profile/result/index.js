import React from 'react'
import { Card, WingBlank, WhiteSpace, Progress } from 'antd-mobile'
import { connect } from 'dva'
import style from './index.less'
import { getLocalTime } from '../../../../utils'

const Header = Card.Header
const Body = Card.Body
const Footer = Card.Footer
const Result = ({app, result, dispatch, location}) => {
  const {resultList} = result
  const {query} = location
  let all = 0
  resultList.forEach((val) => {
    all += val.count
  })
  console.log(query)
  return (
    <div>
      <div style={{height: '0.50rem'}} />
      <div className={style.top}>
        <WingBlank className={style.title}>{query.title}</WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank className={style.time}>截止时间：{getLocalTime(query.time /
          1000)}</WingBlank>
      </div>
      <div style={{height: '0.50rem'}} />
      {resultList.length > 0 && resultList.map((item, index) => {
        return (
          <WingBlank size="lg" key={index}>
            <WingBlank size="lg" />
            <Card className={style.showInfo}>
              <div className={style.header}>
                <Header
                  title={item.title}
                  extra={<span>{item.count}票{' '}{all > 0 ? (Math.round(item.count / all * 100)) : 0}%</span>}
                />
              </div>
              <div className={style.progress}><Progress
                percent={all > 0 ? (item.count / all) * 100 : 0}
                position="normal" /></div>
            </Card>
            <div style={{height: '0.50rem'}} />
          </WingBlank>
        )
      })}
      <WingBlank />
    </div>
  )
}

export default connect(({app, result}) => ({app, result}))(Result)
