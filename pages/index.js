import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Precognition Minimal</title>
      </Head>

      <main className={styles.main}>
        <h3><a href="/user/1">Click to go to the form</a></h3>
      </main>
    </div>
  )
}
