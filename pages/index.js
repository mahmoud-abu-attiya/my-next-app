import Head from "next/head";
import Link from "next/dist/client/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Users list</title>
      <meta name="keywords" content="users , hi , mahmoud" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quasi. Sint officiis nostrum eius omnis perspiciatis, molestiae voluptates quos?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quasi. Sint officiis nostrum eius omnis perspiciatis, molestiae voluptates quos? </p>
      <Link href="/users">
        <a className={styles.btn}>see users list</a>
      </Link>
    </div>
    </>
  )
}
