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
          <img alt="logo_img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FMobiusStrip-01.png%2F220px-MobiusStrip-01.png&f=1&nofb=1"></img>
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
      <style jsx>
      {`
      img{
        width:50%;
      }
      `}
      </style>
    </>
  )
}
