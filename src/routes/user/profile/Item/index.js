import React, { Component } from 'react'
import { connect } from 'dva'
import ReactDOM from 'react-dom'
import { routerRedux } from 'dva/router'
import { List, ListView } from 'antd-mobile'
import { getLocalTime } from '../../../../utils'
import './index.less'

const Item = List.Item
const Brief = Item.Brief
const NUM_ROWS = 20

const ListItem = () => {
  // const {vote} = this.props
  // const {voteList = []} = vote
  return (
    <Item extra="" align="middle" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine>
      Title <Brief>subtitle</Brief>
    </Item>
  )
}

export default connect(({vote}) => ({vote}))(ListItem)
