import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Selections from '../Selections/Selections';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [selections, setSelections] = useState([])
    const [credit, setCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        const url = 'courses.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, [])

    const handleSelect = (course) => {

        let credit = course.credit
        let remainingCredit = 20
        let totalPrice = course.price

        const selected = selections.find(selection => selection.id === course.id)
        if (selected) {
            return toast.error("Already exist, please select others courses!", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            selections.forEach(course => {
                credit += course.credit
                totalPrice += course.price
            })

            if (credit > 20) {
                return toast.error("Credit is not alowed more than 20 hours !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            remainingCredit -= credit
            setCredit(credit)
            setRemainingCredit(remainingCredit)
            const newSelections = [...selections, course]
            setSelections(newSelections)
            setTotalPrice(totalPrice)

        }
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-4">
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 pb-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            handleSelect={handleSelect}
                            course={course}></Course>)
                    }
                </div>
                <Selections
                    credit={credit}
                    totalPrice={totalPrice}
                    remainingCredit={remainingCredit}
                    selections={selections}></Selections>
            </div>
        </div>
    );
};

export default Courses;
