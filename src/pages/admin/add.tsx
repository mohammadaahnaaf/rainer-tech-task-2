"use client"

import { AdminLayout, CourseAdd } from '@rainer/components'
import Head from 'next/head'
import React from 'react'

type Props = {}

const AddCoursePage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Admin | Add</title>
            </Head>
            <AdminLayout>
                <CourseAdd />
            </AdminLayout>
        </>
    )
}
export default AddCoursePage;