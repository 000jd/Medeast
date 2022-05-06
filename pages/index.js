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
        </h1>

        <p className={styles.description}>
          Get started by {' '}
          <ConnectButton/>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
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
