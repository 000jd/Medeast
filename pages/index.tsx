import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGround from '../components/BackGround'

const Home: NextPage = () => {
  return (
    <div className='main-h-screen'>
      <Header />
      <BackGround />

      <Footer />
    </div>
  )
}

export default Home
