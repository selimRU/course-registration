
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';
const Course = ({ course,handleSelect }) => {
    const { title, description, credit, price, img } = course;
    return (
        <div className='px-5 bg-white shadow-md py-5 rounded-md space-y-4'>
            <img className='w-full lg:hover:-translate-y-1 hover:scale-110' src={img} alt="" />
            <h3 className='text-sm font-semibold'>{title}</h3>
            <p className=' text-sm text-gray-500 font-normal'>{description.length > 150 ? description.slice(0, 150) : description}</p>
            <div className='flex justify-between items-center text-gray-500 font-light text-base'>
                <div className='flex items-center gap-3'>
                    <FiDollarSign />
                    <p>Price: {price}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <BiBookOpen />
                    <p>Credit: {credit} hr</p>
                </div>
            </div>
            <button onClick={() => handleSelect(course)} className='bg-blue-500 hover:bg-blue-600 rounded-md w-full py-2 text-lg text-white'>Select</button>
        </div>
    );
};

export default Course;