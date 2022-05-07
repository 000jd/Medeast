import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from 'web3uikit'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medeast</title>
        <meta name="description" content="for Medeast app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Medeast</a>
          <p className={styles.description}>
            Medeast is an Medicen Tracking and authentication system made using 
            WEB3 Techenolage. It is totaly decentralized platform ..
            </p>
        </h1>

        <p className={styles.description}>
          Get started by {' '}
          <ConnectButton/>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
        >
          Made by ICFAI University Tripura.
        </a>
      </footer>
    </div>
  )
}
