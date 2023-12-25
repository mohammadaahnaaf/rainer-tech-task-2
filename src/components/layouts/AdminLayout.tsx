import React from 'react'
import { Header, SideBar } from '..'

type Props = {}

export const AdminLayout = ({ children }: any) => {
  return (
    <div className='bg-white min-h-screen'>
      <Header />
      <div className='flex w-full h-full'>
        <SideBar />
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}