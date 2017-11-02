import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Card } from 'antd-mobile'
import { getLocalTime } from '../../../utils'
import style from './index.less'

class Will extends Component {
  loadMore = () => {
    const {will} = this.props
    const {page, count} = will
    if (page < count) {
      this.props.dispatch({type: 'will/fetchNextWillVote', payload: {page: page + 1}})
      this.props.dispatch({type: 'will/savePage', payload: {page: page + 1}})
    } else {
      this.props.dispatch({type: 'will/saveLastPage', payload: {isLastPage: true}})
    }
  }

  render () {
    const {will} = this.props
    const {voteList = [], isLastPage} = will
    return (
      <div className={style.willWrapper} key='will'>
        {
          voteList.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  onClick={() => this.props.dispatch(routerRedux.push(`/vote/content?id=${item.id}&isPublic=${item.isPublic}&status=will`))}>
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
                          style={{fontSize: '0.4rem', color: '#FF6E27'}}>{item.type === 1 ? '单选' : '多选'}</span></div>
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

export default connect(({app, will}) => ({app, will}))(Will)
