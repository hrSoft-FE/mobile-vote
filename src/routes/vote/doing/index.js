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
                <Card onClick={() => this.props.dispatch(routerRedux.push(`/vote/content?id=${item.id}`))}>
                  <div style={{padding: '0 0.3rem', backgroundColor: 'white'}}>
                    <div style={{
                      height: '1rem',
                      lineHeight: '1rem',
                      color: '#888',
                      fontSize: '0.36rem',
                      borderBottom: '1px solid #ddd',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.title}
                    </div>
                    <div style={{display: '-webkit-box', display: 'flex', padding: '0.3rem'}}>
                      <div style={{display: 'inline-block'}}>
                        <div style={{fontSize: '0.32rem'}}><span
                          style={{fontSize: '0.6rem', color: '#FF6E27'}}>id:{item.id}</span></div>
                        <div style={{fontSize: '0.32rem', color: '#969696'}}>
                          结束时间：{getLocalTime(item.endAt / 1000)}</div>
                      </div>
                    </div>
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
