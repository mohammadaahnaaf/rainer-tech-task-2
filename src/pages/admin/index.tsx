import { AdminLayout, CoursesList } from '@rainer/components'
import { withAuth } from '@rainer/hoc'
import Head from 'next/head'
import React from 'react'

type Props = {}

const AdminPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Admin | Courses</title>
            </Head>
            <AdminLayout>
                <CoursesList />
            </AdminLayout>
        </>
    )
}

export default withAuth(AdminPage)