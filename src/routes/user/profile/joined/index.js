import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Card, Tabs, Badge } from 'antd-mobile'
import { getLocalTime } from '../../../../utils'
import style from './index.less'

const TabPane = Tabs.TabPane

class Joined extends Component {
  render () {
    const {joined = {}} = this.props
    const {voteList = []} = joined
    return (
      <div className={style.doingWrapper} key='doing'>
        <Tabs style={{marginBottom: '20px'}}>
          <TabPane tab={<Badge>我参与的投票</Badge>} key="will" />
        </Tabs>
        {
          voteList.map((item, index) => {
            return (
              <div key={index}>
                <Card>
                  <div style={{padding: '0 0.3rem', backgroundColor: 'white'}}>
                    <div style={{
                      height: '1rem',
                      lineHeight: '1rem',
                      color: '#888',
                      fontSize: '0.36rem',
                      borderBottom: '1px solid #ddd',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      display: '-webkit-box',
                      display: 'flex',
                      padding: '0.3rem',
                    }}>
                      <div style={{display: 'inline-block'}}>
                        <div style={{fontSize: '0.32rem'}}><span
                          style={{
                            fontSize: '0.4rem',
                            color: '#FF6E27',
                          }}>{item.type === 1 ? '单选' : '多选'}</span></div>
                      </div>
                    </div>
                    <div style={{
                      height: '0.8rem',
                      lineHeight: '0.8rem',
                      color: '#888',
                      fontSize: '0.36rem',
                      borderTop: '1px solid #ddd',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      display: '-webkit-flex',
                      justifyContent: 'space-around',
                    }}>
                      <div onClick={() => this.props.dispatch(routerRedux.push(
                        `/user/profile/result?id=${item.id}&title=${item.title}&time=${item.end_at}`))}>
                        查看
                      </div>
                    </div>
                  </div>
                </Card>
                <div
                  style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                  }}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(({joined}) => ({joined}))(Joined)
