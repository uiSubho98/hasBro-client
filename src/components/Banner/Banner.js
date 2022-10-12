import React from 'react';
import banner from '../../Assets/Banner/banner.png'

const Banner = () => {
    return (
        <div className='w-full lg:h-[80vh]  bg-cover'>
        <img src={banner} className='w-full h-full sm:' alt="" />
        
    </div>
    );
};

export default Banner;