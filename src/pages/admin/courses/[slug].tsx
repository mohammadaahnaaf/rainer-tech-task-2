import { AdminLayout, CourseDetails } from '@rainer/components'
import { withAuth } from '@rainer/hoc'
import Head from 'next/head'
import React from 'react'

type Props = {}

const CourseDetailsPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Admin | RainTech</title>
            </Head>
            <div>
                <AdminLayout>
                    <CourseDetails />
                </AdminLayout>
            </div>
        </>
    )
}

export default withAuth(CourseDetailsPage)