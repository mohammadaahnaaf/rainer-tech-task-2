import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export const CoursesDetails = (props: Props) => {

    const router = useRouter()
    let id = router.query.slug

    const [tags, setTags] = React.useState(["Topic"]);
    const [days, setDays] = React.useState(["Sunday", "Monday"]);

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

    // get single item 
    React.useEffect(() => {

        async function getData() {
            try {
                const resp = await axios.get(
                    `http://localhost:8000/api/courses/${id}`
                );
                setPostData(resp.data)
                setTags(resp.data.topics)
                setDays(resp.data.schedule.classDays)
                console.log(resp?.data)

            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
        id && getData()
    }, [id])

    return (
        <div className='w-full'>
            <div className='w-full max-w-6xl grid gap-3 mx-auto text-black p-5'>
                <h1 className='py-4 text-3xl font-semibold'>{postData.name}</h1>
                <p className='text-lg'>{postData.description}</p>
                <div className='py-4 grid gap-3'>
                    <p className='text-lg flex gap-4 items-center'><span className='font-semibold'> Duration: </span>{postData.duration}</p>
                    <p className='text-lg flex gap-4 items-center'><span className='font-semibold'> Start Date: </span>{postData.schedule.startDate}</p>
                    <p className='text-lg flex gap-4 items-center'><span className='font-semibold'> End Date: </span>{postData.schedule.endDate}</p>
                    <p className='text-lg flex gap-4 items-center'><span className='font-semibold'> Class Time: </span>{postData.schedule.classTime}</p>
                </div>
            </div>
        </div>
    )
}