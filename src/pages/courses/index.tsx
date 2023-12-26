import { Home, Layout } from '@rainer/components'
import Head from 'next/head'
import React from 'react'

type Props = {}

const CoursePage = (props: Props) => {
    return (
        <>
        <Head>
            <title>RainTech | Courses</title>
        </Head>
        <Layout>
            <Home />
        </Layout>
        </>
    )
}

export default CoursePage