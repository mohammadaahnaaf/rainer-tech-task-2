import React from 'react'
import { Header } from '..'

type Props = {
    children: any
}

export const Layout = ({ children }: any) => {
    return (
        <div className='h-screen w-full bg-white'>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}