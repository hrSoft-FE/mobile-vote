import React, {Component} from 'react'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import PropTypes from 'prop-types'
import {verify, toastFormMessage} from '../../../../utils'
import avatar from '../../../../assets/avatar.jpeg'
import style from '../../index.less'
import {Tabs, WhiteSpace, InputItem, Icon, List, Button, Toast, Flex, Modal, Card} from 'antd-mobile'
import {createForm} from 'rc-form'

const Item = List.Item

class Panel extends Component {
  render() {
    const {dispatch, panel: {userInfo}, form: {getFieldDecorator}, children} = this.props
    const {name, mobile} = userInfo
    const turnTo = (path) => {
      dispatch(routerRedux.push(`/user/profile/${path}`))
    }
    return (
      <div>
        <WhiteSpace size="sm" />
        <Card full>
          <Card.Header
            title={
              <div className={style.flexContainer}>
                <div style={{marginLeft: '.5rem'}} className={style.flexL}>
                  <div className={style.nickName}>{name}</div>
                  <div className={style.userMobile}>{mobile}</div>
                </div>
              </div>
            }
            thumb={<div className={style.profileLogo}>
              <img src={avatar} alt="" className={style.img} />
            </div>}
          />
        </Card>
        <WhiteSpace size="lg" />
        <Card onClick={() => turnTo('created')}>
          <Card.Body>
            <Item extra={<span>&gt;</span>} align="middle"
                  thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                  multipleLine>
              我创建的投票
            </Item>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
        <Card onClick={() => turnTo('joined')}>
          <Card.Body>
            <Item extra={<span>&gt;</span>} align="middle"
                  thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                  multipleLine>
              我参加的投票
            </Item>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

Panel.propTypes = {
  form: PropTypes.object,
  profile: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({panel, user}) => ({panel, user}))(createForm()(Panel))
