import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Card } from 'antd-mobile'
import { getLocalTime } from '../../../utils'
import style from './index.less'

class Doing extends Component {
  loadMore = () => {
    const {doing} = this.props
    const {page, count} = doing
    if (page < count) {
      this.props.dispatch({type: 'doing/fetchNextDoingVote', payload: {page: page + 1}})
      this.props.dispatch({type: 'doing/savePage', payload: {page: page + 1}})
    } else {
      this.props.dispatch({type: 'doing/saveLastPage', payload: {isLastPage: true}})
    }
  }

  render () {
    const {doing} = this.props
    const {voteList = [], isLastPage} = doing
    return (
      <div className={style.doingWrapper} key='doing'>
        {
          voteList.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  onClick={() => this.props.dispatch(routerRedux.push(item.isPublic ? `/vote/content?id=${item.id}&isPublic=${item.isPublic}` : `/vote/password?id=${item.id}`))}>
                  <div style={{padding: '0 0.5rem', backgroundColor: 'white'}}>
                    <div style={{
                      height: '1rem',
                      lineHeight: '1rem',
                      color: '#000000',
                      fontSize: '0.36rem',
                      borderBottom: '1px solid #ddd',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.title}
                    </div>
                    <div style={{display: 'inline-block', paddingTop: '20px'}}>
                        <span
                          style={{fontSize: '0.4rem', color: '#FF6E27'}}>{item.type === 1 ? '单选' : '多选'}
                        </span>
                    </div>
                    <div style={{color: '#969696'}}>
                      结束时间：{getLocalTime(item.endAt / 1000)}</div>
                  </div>
                </Card>
                <div
                  style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED'
                  }}
                />
              </div>
            )
          })
        }
        <div className={style.loadNextPage} onClick={this.loadMore}>
          {isLastPage ? '已加载完毕' : '点击可以刷新'}
        </div>
      </div>
    )
  }
}

export default connect(({app, doing}) => ({app, doing}))(Doing)
