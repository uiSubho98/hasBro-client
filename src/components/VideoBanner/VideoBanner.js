import React from 'react';
import video2 from '../../Assets/video-banner/hasBro.mp4'

const VideoBanner = () => {
    return (
        <div>
             <div className='deposito-details-video mt-5 m-auto w-full container  h-44'>
            <div  className='video-details lg:m-auto'>
         <video className='banner-details  h-[480px]' src={video2} muted loop autoPlay ></video>
          </div>
        </div>
        </div>
    );
};

export default VideoBanner;