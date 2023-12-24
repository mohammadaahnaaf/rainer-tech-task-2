import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RainTech | Home</title>
      </Head>
      <div className='h-screen w-full bg-green-900'>
        <h2 className='text-3xl p-5 text-center'>Ahnafya</h2>
      </div>
    </>
  )
}
