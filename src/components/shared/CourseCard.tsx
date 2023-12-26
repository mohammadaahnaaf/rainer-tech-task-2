import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  item: any
}

export const CourseCard = (props: Props) => {
  return (
    <div className='p-2 relative cursor-pointer grid gap-2 bg-red-500 bg-opacity-10 hover:scale-95 duration-300 w-full text-red-800 rounded-lg'>
      <div className='w-full'>
        <div className='relative w-full h-[150px]'>
          <Image src='/course.jpg' className='object-fit h-full' fill alt='course-logo' />
          <Link className='absolute z-20 top-0 p-2 w-full h-full' href={`/courses/${props.item._id}`} />
        </div>
      </div>
      <div>
        <h1 className=''>{props.item.name}</h1>
      </div>
    </div>
  )
}