import React from 'react'

import Header from './header.jsx'
import Footer from './footer.jsx'

import styles from './main.less'

function Main ({children, location}) {
  return (
    <div className={styles.normal}>
      <Header location={location}/>
      {children}
      <Footer location={location}/>
    </div>
  )
}

export default Main
