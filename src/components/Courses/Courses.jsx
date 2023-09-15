import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([])



    useEffect(() => {
        const url = 'courses.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data)
            })
    }, [])


    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 pb-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;