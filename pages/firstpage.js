import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
export default function X() {
  return (
    <React.Fragment>
      <Head>
        <title>页面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/">
          <a>回到首页</a>
        </Link>
      </div>
      <style jsx>{`
        div {
          background-color: red;
        }
      `}</style>
    </React.Fragment>
  )
}
