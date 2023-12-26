import React from 'react'
import Link from 'next/link';
import axios from 'axios';

type Props = {}

export const CoursesList = (props: Props) => {

  const [success, setSuccess] = React.useState('')
  const [course, setCourse] = React.useState([])
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

  return (
    <div className='p-10 grid gap-3'>
      
      {!!success && (<h1>{success}</h1>)}

      {course?.map((item: any, index: number) => (
        <div key={index} className='text-black hover:text-[green] duration-300 hover:scale-95 font-semibold text-lg flex items-center gap-2'>
          <p>{index + 1}. </p>
          <Link href={`/admin/courses/${item._id}`}>{item.name}</Link>
        </div>
      ))}

    </div>
  )
}