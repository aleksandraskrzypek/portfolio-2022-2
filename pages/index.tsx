import Head from 'next/head'
import Intro from '../components/Intro'
import Omnie from '../components/Omnie'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div>
      <Intro />
      <Omnie />
      <Portfolio />
    </div>
  )
}
