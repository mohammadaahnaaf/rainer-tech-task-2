import { courses, coursess } from '@rainer/data';
import axios from 'axios';
import React from 'react'

type Props = {}

const CoursesPage = (props: Props) => {

    const [success, setSuccess] = React.useState('')
    const [course, setCourse] = React.useState<any[]>([])

    // update item 
    const handleUpdate = async (id: string) => {

        if (typeof window !== undefined) {

            let token = localStorage.getItem('accessToken')
            const postData = coursess

            try {
                const response = await axios.put(
                    `http://localhost:8000/api/courses/${id}`,
                    postData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
                setSuccess('course update done')
                // Handle the response
                console.log('Response:', response.data);
            } catch (error: any) {
                // Handle errors
                console.error('Error:', error.message);
            }
        }
    };

    // create item 
    const handleSubmit = async () => {

        if (typeof window !== undefined) {

            let token = localStorage.getItem('accessToken')
            const postData = courses

            try {
                const response = await axios.post(
                    'http://localhost:8000/api/courses',
                    postData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
                setSuccess('course creation done')
                // Handle the response
                console.log('Response:', response.data);
            } catch (error: any) {
                // Handle errors
                console.error('Error:', error.message);
            }
        }
    };

    // delete item 
    const handleDelete = (id: string) => {
        if (typeof window !== undefined) {

            let token = localStorage.getItem('accessToken')

            try {
                const response = axios.delete(
                    `http://localhost:8000/api/courses/${id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
                setSuccess('course vanished')
            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
    }

    // get all items 
    React.useEffect(() => {

        function getData() {
            try {
                const resp: any = axios.get(
                    `http://localhost:8000/api/courses`
                );
                setCourse(resp?.data)
                console.log(resp?.data)

            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
        getData()
    }, [])

    return (
        <div className='p-10 h-screen w-full'>
            {!!success && (<h1>{success}</h1>)}

            <button className='rounded-full p-2 bg-white text-yellow-500' type='submit' onClick={handleSubmit}>Create New Course</button>
            <button className='rounded-full p-2 bg-green-600 text-black' type='submit' onClick={() => handleUpdate('658885562cfa7ad00b099227')}>Update Course</button>
            <button className='rounded-full p-2 bg-red-600 text-green-500' type='submit' onClick={() => handleDelete('658885562cfa7ad00b099227')}>Delete Course</button>
        </div>
    )
}

export default CoursesPage;