import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import { verify, toastFormMessage } from '../../../../utils'
import avatar from '../../../../assets/avatar.jpeg'
import style from '../../index.less'
import { Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast, Flex, Card } from 'antd-mobile'
import { createForm } from 'rc-form'
const Item = List.Item
const Brief = Item.Brief

class Panel extends Component {
  render () {
    console.log('Panel')
    const {dispatch, form: {getFieldDecorator}, children} = this.props

    const turnTo = (path) => {
      dispatch(routerRedux.push(`/user/profile/${path}`))
    }

    return (
      <div>
        <WhiteSpace size="sm"/>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="sm"/>
        <Card full>
          <Card.Header
            title={
              <div style={{marginLeft: '.5rem'}}>
                <div className={style.nickName}>{name}</div>
                {/*<div className={style.userMobile}>{mobile}</div>*/}
              </div>
            }
            thumb={<div className={style.profileLogo}>
              <img src={avatar} alt="" className={style.img}/>
            </div>}
          />
        </Card>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <Card onClick={() => turnTo('created')}>
          <Card.Header
            title="我创建的投票"
            extra={<span>&gt;</span>}
          />
          <Card.Body>
            <Item extra="" align="middle" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                  multipleLine>
              Title <Brief>subtitle</Brief>
            </Item>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg"/>
        <Card onClick={() => turnTo('joined')}>
          <Card.Header
            title="我参加的投票"
            extra={<span>&gt;</span>}
          />
          <Card.Body>
            <Item extra="" align="middle" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                  multipleLine>
              Title <Brief>subtitle</Brief>
            </Item>
          </Card.Body>
        </Card>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
      </div>
    )
  }
}

Panel.propTypes = {
  form: PropTypes.object,
  profile: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({panel}) => ({panel}))(createForm()(Panel))
