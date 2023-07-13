import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'



export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <Footer />
    </>
  )
}
