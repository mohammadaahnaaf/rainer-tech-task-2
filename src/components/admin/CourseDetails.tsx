"use client"
import React from 'react'
import { TagsInput } from '..'
import axios from 'axios';
import { PostData } from '@rainer/types';
import Router, { useRouter } from 'next/router';

type Props = {}

export const CourseDetails = (props: Props) => {

  const router = useRouter()
  let id = router.query.slug

  const [tags, setTags] = React.useState(["Topic"]);
  const [days, setDays] = React.useState(["Sunday", "Monday"]);

  const [success, setSuccess] = React.useState('')

  const [postData, setPostData] = React.useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    level: "",
    topics: JSON.stringify(tags),
    schedule: {
      startDate: "",
      endDate: "",
      classDays: JSON.stringify(days),
      classTime: ""
    }
  });

  // get all items 
  React.useEffect(() => {

    async function getData() {
      try {
        const resp = await axios.get(
          `http://localhost:8000/api/courses/${id}`
        );
        setTags(resp.data.topics)
        setDays(resp.data.schedule.classDays)
        setPostData(resp.data)
        console.log(resp?.data)

      } catch (error: any) {
        console.error('Error:', error.message);
      }
    }
    id && getData()
  }, [id])

  // handle data 
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setPostData((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };

  // handle schedule data 
  const handleScheduleChange = (event: any) => {
    const { name, value } = event.target;

    setPostData((prevData) => ({
      ...prevData,
      schedule: {
        ...prevData.schedule,
        [name]: value
      }
    }));
  };

  // update data 
  async function handleSubmit() {
    if (typeof window !== undefined) {

      let token = localStorage.getItem('accessToken')

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
        setSuccess('Update done')
        // Handle the response
        console.log('Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
    }
  };

  // delete item 
  const handleDelete = () => {
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
        Router.push('/admin')
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    }
  }

  return (

    <div className='p-4 bg-gray-100 text-black w-full'>
      <h1 className='px-5 py-2 font-bold text-xl'>Update Course</h1>

      {success && (<h2>{success}</h2>)}

      <div className='p-5 grid gap-3'>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='name'>Course Name</label>
          <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md' name='name' id='name'
            value={postData?.name}
            onChange={event => handleChange(event)}
            type="text" placeholder='Enter Name' />
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='description'>Description</label>
          <textarea className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
            name='description' id='description'
            value={postData?.description}
            onChange={event => handleChange(event)}
            placeholder='Enter Description' />
        </div>

        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='duration'>Duration</label>
          <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
            name='duration' id='duration'
            value={postData?.duration}
            onChange={event => handleChange(event)}
            type="text" placeholder='Enter duration' />
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='name'>Price</label>
          <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
            name='price' id='price'
            value={postData?.price}
            onChange={event => handleChange(event)}
            type="text" placeholder='Enter Price' />
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='classDays'>Topics</label>
          <TagsInput placeholder='Enter Topics' tags={tags} setTags={setTags} />
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='lavel'>Level</label>
          <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
            name='level' id='level'
            value={postData?.level}
            onChange={event => handleChange(event)}
            type="text" placeholder='Enter Name' />
        </div>
        <div className='flex gap-4 items-center w-full'>
          <div className='grid gap-1 w-full'>
            <label className='font-medium' htmlFor='name'>Start Date</label>
            <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
              name="startDate"
              value={postData?.schedule?.startDate}
              onChange={event => handleScheduleChange(event)}
              type="text" placeholder='Enter Name' />
          </div>
          <div className='grid gap-1 w-full'>
            <label className='font-medium' htmlFor='name'>End Date</label>
            <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
              name="endDate"
              value={postData?.schedule?.endDate}
              onChange={event => handleScheduleChange(event)}
              type="text" placeholder='Enter Name' />
          </div>
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='classTime'>Class Time</label>
          <input className='px-5 py-2 outline-none border-0 ring-1 ring-gray-300 rounded-md'
            name='classTime' id='classTime'
            value={postData?.schedule?.classTime}
            onChange={event => handleScheduleChange(event)}
            type="text" placeholder='Enter Time' />
        </div>
        <div className='grid gap-1'>
          <label className='font-medium' htmlFor='classDays'>Class Days</label>
          <TagsInput placeholder='Class Days' tags={days} setTags={setDays} />
        </div>
      </div>
      <div className='p-5 flex font-semibold text-white justify-end gap-4 bg-white rounded-md'>
        <button className='px-5 w-32 py-2 rounded-lg hover:bg-black bg-[red]' onClick={handleDelete} type='button'>Delete</button>
        <button className='px-5 w-32 py-2 rounded-lg bg-[green] hover:bg-black' type='submit' onClick={handleSubmit}>Update</button>
      </div>
    </div>
  )
}