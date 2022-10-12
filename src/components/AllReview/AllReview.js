import './AllReview.css'
import React, { useRef, useState } from "react";
import "./AllReview.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { useQuery } from 'react-query';
import EachReview from './EachReview';
import Loading from '../Loading/Loading';


const AllReview = () => {

    const {data:reviews,isLoading}= useQuery('review',()=>fetch(`http://localhost:5000/review`,{
        method:'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=>res.json())) 

        console.log(reviews);
        if(isLoading){
            return <Loading></Loading>
        }
  
    return (
<div className='text-center'>


<h2 className='text-3xl m-4 font-bold text-primary'>What Our Customer Says</h2>



<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-24 mt-2'>


{
                reviews.map(eachReview=><EachReview key={eachReview._id} eachReview={eachReview}></EachReview>)
            }


</div>


</div>

         

    )
};

export default AllReview;


