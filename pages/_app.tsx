import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://qdzq7tshlo2y.usemoralis.com:2053/server"
      appId="cyhr4NsZcICo8b4CALTnAt02ZZDEGtXdw7qJlPMr"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp


/**serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID} */