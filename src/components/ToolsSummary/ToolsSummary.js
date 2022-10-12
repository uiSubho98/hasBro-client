import React from 'react';
import image1 from '../../Assets/Tools-summary/image1.jpg'
import image2 from '../../Assets/Tools-summary/image2.png'
import image3 from '../../Assets/Tools-summary/image3.jpg'

const ToolsSummary = () => {
    return (
       <div className='text-center'>
            <div className=' mt-5 px-12 grid lg:grid-cols-3 sm:grid-cols-1  gap-6 '>
            <div><img src={image1} alt="" className=' w-full  rounded-lg shadow-lg' /></div>
            <div><img src={image2} alt=""className='h-85 w-full rounded-lg shadow-lg' /></div>
            <div><img src={image3} alt="" className=' w-full rounded-lg shadow-lg' /></div>
        </div>
       </div>
    );
};

export default ToolsSummary;