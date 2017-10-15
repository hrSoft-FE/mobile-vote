import React, { Component } from 'react'
import { connect } from 'dva'
import ReactDOM from 'react-dom'
import { routerRedux } from 'dva/router'
import { RefreshControl, ListView } from 'antd-mobile'
import { getLocalTime } from '../../../utils'
import './index.less'

class VoteList extends Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      dataSource,
      refreshing: true,
      height: document.documentElement.clientHeight
    }
  }

  componentDidMount () {
    // 初始化数据
    this.props.dispatch({type: 'vote/savePage', payload: {page: 1}})
    // Set the appropriate height
    setTimeout(() => this.setState({
      height: this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop
    }), 0)

    // handle https://github.com/ant-design/ant-design-mobile/issues/1588
    this.lv.getInnerViewNode().addEventListener('touchstart', this.ts = (e) => {
      this.tsPageY = e.touches[0].pageY
    })
    // In chrome61 `document.body.scrollTop` is invalid
    const scrollNode = document.scrollingElement ? document.scrollingElement : document.body
    this.lv.getInnerViewNode().addEventListener('touchmove', this.tm = (e) => {
      this.tmPageY = e.touches[0].pageY
      if (this.tmPageY > this.tsPageY && this.scrollerTop <= 0 && scrollNode.scrollTop > 0) {
        console.log('下拉刷新')
        this.domScroller.options.preventDefaultOnTouchMove = false
      } else {
        this.domScroller.options.preventDefaultOnTouchMove = undefined
      }
    })
  }

  componentWillUnmount () {
    this.lv.getInnerViewNode().removeEventListener('touchstart', this.ts)
    this.lv.getInnerViewNode().removeEventListener('touchmove', this.tm)
  }

  onScroll = (e) => {
    this.scrollerTop = e.scroller.getValues().top
    this.domScroller = e
  }

  onRefresh = () => {
    console.log('onRefresh')
    if (!this.manuallyRefresh) {
      this.setState({refreshing: true})
    } else {
      this.manuallyRefresh = false
    }

    // 下拉刷新初始数据
    this.props.dispatch({type: 'vote/upDateList', payload: {page: 1}})
    console.log('下拉')
    const {vote = {}} = this.props
    const {voteList = []} = vote
    this.rData = voteList
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      refreshing: false,
      showFinishTxt: true
    })
    if (this.domScroller) {
      this.domScroller.scroller.options.animationDuration = 500
    }
  }

  onEndReached = () => {
    // 加载新一页
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    console.log('reach end')
    this.setState({isLoading: true})
    const {vote = {}} = this.props
    const {voteList = [], page, count} = vote
    console.log('加载', page, count)
    if (page > count) {
      this.setState({isLoading: false})
    } else {
      this.props.dispatch({type: 'vote/fetchNextVote', payload: {page: page + 1}})
      this.rData = [...this.rData, ...voteList]
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      })
    }
  }

  scrollingComplete = () => {
    // In general, this.scrollerTop should be 0 at the end, but it may be -0.000051 in chrome61.
    if (this.scrollerTop >= -1) {
      this.setState({showFinishTxt: false})
    }
  }

  renderCustomIcon () {
    return [
      <div key="0" className="am-refresh-control-pull">
        <span>{this.state.showFinishTxt ? '刷新完毕' : '下拉可以刷新'}</span>
      </div>,
      <div key="1" className="am-refresh-control-release">
        <span>松开立即刷新</span>
      </div>
    ]
  }

  render () {
    const {vote = {}} = this.props
    const {voteList = []} = vote
    let index = voteList.length === 0 ? 0 : voteList.length - 1
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    )
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        console.log('from row')
      } else {
        const obj = voteList[index--]
        const {title = '', id = null, endAt = null} = obj
        return (
          <div
            key={rowID}
            style={{padding: '0 0.3rem', backgroundColor: 'white'}}
            onClick={() => this.props.dispatch(routerRedux.push(`/vote/content?id=${id}`))}
          >
            <div style={{display: '-webkit-box', display: 'flex', padding: '0.3rem'}}>
              <div style={{display: 'inline-block'}}>
                <div style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '0.36rem',
                  marginBottom: '30px'
                }}>{title || '加载中'}</div>
                <div style={{fontSize: '0.32rem', marginBottom: '30px'}}><span
                  style={{fontSize: '0.6rem', color: '#FF6E27'}}>{id}</span>
                  元/任务
                </div>
                <div style={{fontSize: '0.32rem', color: '#969696'}}>结束时间：{getLocalTime(endAt)}</div>
              </div>
            </div>
          </div>
        )
      }
    }
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{padding: '0.3rem', textAlign: 'center'}}>
          {this.state.isLoading ? '加载中...' : '全部加载完毕'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={0}
        pageSize={10}
        style={{
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '0.1rem 0'
        }}
        scrollerOptions={{scrollbars: true, scrollingComplete: this.scrollingComplete}}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          icon={this.renderCustomIcon()}
        />}
        onScroll={this.onScroll}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}

export default connect(({vote}) => ({vote}))(VoteList)
