import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className='p-5 bg-black w-full'>
      <div className='flex justify-between'>
        <div className='relative w-[46px] h-[46px]'>
          <Image src='/logo.svg' className='object-fit h-full custom-spin' fill alt='course-app-logo' />
          <Link href='/' className='absolute w-full h-full' />
        </div>
        <div className='flex items-center gap-6 text-white font-medium text-lg'>
          <Link className='border-y-2 hover:border-t-[red] hover:border-b-[transparent] hover:text-[red] duration-300 border-t-transparent border-b-[red]' href='/courses'>Courses</Link>
          <Link className='border-y-2 hover:border-t-[red] hover:border-b-[transparent] hover:text-[red] duration-300 border-t-transparent border-b-[red]' href='#'>About</Link>
          <Link className='border-y-2 hover:border-t-[red] hover:border-b-[transparent] hover:text-[red] duration-300 border-t-transparent border-b-[red]' href='#'>Contact</Link>
        </div>
        <div className='flex items-center'>
          <Link href='/admin/courses' className='text-[red] duration-300 hover:text-[green]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}