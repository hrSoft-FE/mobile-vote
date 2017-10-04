import React from 'react'

export default () => {
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>你要找的页面不存在 <a href="/">返回首页</a></p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#page-404{ height: calc(100% - 199px);}',
        }}
      />
    </div>
  )
}
