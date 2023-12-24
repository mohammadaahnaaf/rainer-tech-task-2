import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-full bg-green-900'>
      <h2 className='text-3xl p-5 text-center'>Ahnafya</h2>
    </div>
  )
}
