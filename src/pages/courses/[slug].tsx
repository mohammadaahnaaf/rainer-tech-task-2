import { CoursesDetails, Layout } from '@rainer/components'
import Head from 'next/head'
import React from 'react'

type Props = {}

const CourseDetailsPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>RainTech | Courses</title>
            </Head>
            <Layout>
                <CoursesDetails />
            </Layout>
        </>
    )
}

export default CourseDetailsPage