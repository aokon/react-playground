import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import stylesheet from 'styles/index.scss'

export default ({ children, title = 'This is default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />

    {children}

    <Footer />
  </div>
)
