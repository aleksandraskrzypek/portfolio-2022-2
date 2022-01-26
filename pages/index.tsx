import Head from 'next/head'
import Intro from '../components/Intro'
import Omnie from '../components/Omnie'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Intro />
      <Omnie />
      <Portfolio />
      <Footer />
    </div>
  )
}
