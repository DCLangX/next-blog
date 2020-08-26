import Head from 'next/head'
// import styles from '../styles/Home.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>标题</h1>
      <Link href="/firstpage">
        <a>点击访问/firstpage!</a>
      </Link>
    </div>
  )
}
