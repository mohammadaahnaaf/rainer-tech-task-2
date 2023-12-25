import { AdminLayout } from '@rainer/components';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

type Props = {}

const CoursesPage = (props: Props) => {

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
                <div className='p-10 w-full grid gap-4'>
                    {!!success && (<h1>{success}</h1>)}

                    {course?.map((item: any, index: number) => (
                        <div key={index} className='text-black'>
                            <Link href={`/admin/courses/${item._id}`}>{item.name}</Link>
                        </div>
                    ))}

                    {/* <button className='rounded-full p-2 bg-white text-yellow-500' type='submit' onClick={handleSubmit}>Create New Course</button> */}
                    {/* <button className='rounded-full p-2 bg-green-600 text-black' type='submit' onClick={() => handleUpdate('658885562cfa7ad00b099227')}>Update Course</button> */}
                    {/* <button className='rounded-full p-2 bg-red-600 text-green-500' type='submit' onClick={() => handleDelete('658885562cfa7ad00b099227')}>Delete Course</button> */}
                </div>
            </AdminLayout>
        </>
    )
}

export default CoursesPage;