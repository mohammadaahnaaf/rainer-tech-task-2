import React from 'react'
import { CourseCard, TagsInput } from '.'
import axios from 'axios';

type Props = {}

export const Home = (props: Props) => {

  const [tags, setTags] = React.useState(["Topic"]);
  const [days, setDays] = React.useState(["Sunday", "Monday"]);

  const [courses, setCourses] = React.useState([]);

  // get all items 
  React.useEffect(() => {

    async function getData() {
      try {
        const resp = await axios.get(
          `http://localhost:8000/api/courses`
        );
        setCourses(resp.data)
        console.log(resp.data)

      } catch (error: any) {
        console.error('Error:', error.message);
      }
    }
    getData()
  }, [])

  return (
    <div className='w-full p-4'>
      <div className='grid gap-5 w-full max-w-6xl mx-auto grid-cols-2 md:grid-cols-4'>
        {courses.map((x: any, index: number) => (
          <CourseCard key={index} item={x} />
        ))}
      </div>
    </div>
  )
}