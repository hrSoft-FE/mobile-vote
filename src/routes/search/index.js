import React from 'react'
import { connect } from 'dva'
import './index.less'

const Search = ({location, app, children, search}) => {
  return (
    <div>
      <div>
        Search
      </div>
    </div>
  )
}

export default connect(({app, search, vote}) => ({app, search, vote}))(Search)
