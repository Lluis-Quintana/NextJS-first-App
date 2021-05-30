import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>DevTer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>
            DevTer
          </h1>
            <nav>
              <Link href="/timeline">Timeline</Link>
              <br />
              <Link href="/detail">Detail</Link>
            </nav>
          <h2>Random description</h2>
        </main>
      </div>
    </>
  )
}
