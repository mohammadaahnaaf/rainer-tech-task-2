import { AdminLayout } from '@rainer/components';
import { withAuth } from '@rainer/hoc';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

type Props = {}

const CoursesPages = (props: Props) => {

    const [success, setSuccess] = React.useState('')
    const [course, setCourse] = React.useState([])

    // update item 
    // const handleUpdate = async (id: string) => {

    //     if (typeof window !== undefined) {

    //         let token = localStorage.getItem('accessToken')
    //         const postData = coursess

    //         try {
    //             const response = await axios.put(
    //                 `http://localhost:8000/api/courses/${id}`,
    //                 postData,
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${token}`,
    //                     },
    //                 }
    //             );
    //             setSuccess('course update done')
    //             // Handle the response
    //             console.log('Response:', response.data);
    //         } catch (error: any) {
    //             // Handle errors
    //             console.error('Error:', error.message);
    //         }
    //     }
    // };


    // delete item 
    // const handleDelete = (id: string) => {
    //     if (typeof window !== undefined) {

    //         let token = localStorage.getItem('accessToken')

    //         try {
    //             const response = axios.delete(
    //                 `http://localhost:8000/api/courses/${id}`,
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${token}`,
    //                     },
    //                 }
    //             );
    //             setSuccess('course vanished')
    //         } catch (error: any) {
    //             console.error('Error:', error.message);
    //         }
    //     }
    // }

    // get all items 
    React.useEffect(() => {

        async function getData() {
            try {
                const resp = await axios.get(
                    `http://localhost:8000/api/courses`
                );
                setCourse(resp.data)
                console.log(resp?.data)

            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
        getData()
    }, [course])

    return course?.length > 0 && (
        <>
            <Head>
                <title>Admin | RainTech</title>
            </Head>
            <AdminLayout>
                <div className='p-10 grid gap-3'>

                    {!!success && (<h1>{success}</h1>)}

                    {course?.map((item: any, index: number) => (
                        <div key={index} className='text-black hover:text-[green] duration-300 hover:scale-95 font-semibold text-lg flex items-center gap-2'>
                            <p>{index + 1}. </p>
                            <Link href={`/admin/courses/${item._id}`}>{item.name}</Link>
                        </div>
                    ))}

                </div>
            </AdminLayout>
        </>
    )
}

export default withAuth(CoursesPages);