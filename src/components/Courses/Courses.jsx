import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Selections from '../Selections/Selections';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [selections, setSelections] = useState([])
    


    useEffect(() => {
        const url = 'courses.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data)
            })
    }, [])

    const handleSelect = (course) => {
        const selected = selections.find(selection => selection.id === course.id)
        if (selected) {
            return toast.error("Already exist, please select others courses!", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {

            const newSelections = [...selections, course]
            setSelections(newSelections)
           
        }

    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="flex flex-col md:flex-row gap-4">
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 pb-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            handleSelect={handleSelect}
                            course={course}></Course>)
                    }
                </div>
                <Selections
                    selections={selections}></Selections>
            </div>
        </div>
    );
};

export default Courses;