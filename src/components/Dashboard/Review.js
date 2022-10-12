import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import review from '../../Assets/llustration/review.webp'
import auth from '../Firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const [selects,setSelects]=useState()


    const handleAdd=(event)=>{
        event.preventDefault()
        const name= event.target.name.value;
        const email= event.target.email.value;
        const ratings = selects;
        const description= event.target.description.value;
        const addReview={
            name: name,
            email:email,
            ratings:ratings,
            description:description
          }
          console.log(addReview)
          fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                swal({
                    icon: "success",
                    title: "Thanks For Your Review",
                  });
            }
        })
  
    }
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24 mt-2'>
        <div className="w-[100%] mt-24 lg:ml-24 sm:ml-0">
            <img className='' src={review} alt=''/>
        </div>

        <div className='lg:mr-24 sm:m-auto'>
        <form action="" onSubmit={handleAdd}   >
    <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-5">
    <div class="mb-1">
       <label for="name" class="block mb-2 font-bold text-gray-600">Name:</label>
       <input type="text"   name="name"class="border border-gray-300 shadow p-3 w-full  rounded "/>
     </div>

     <div class="mb-5">
       <label for="twitter" class="block mb-2 font-bold text-gray-600">Email:</label>
       <input type="email"  value={user.email}   name="email" class="border  shadow p-3 w-full rounded "/>
     </div>
    </div>

    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
    <div class="mb-5">
       <label for="name" class="block mb-2 font-bold text-gray-600">Ratings:</label>
       <select className='border  shadow p-3 w-full rounded' value={selects} onChange={e=>setSelects(e.target.value)}>
        <option>1 Star</option>
        <option>2 Star</option>
        <option>3 Star</option>
        <option>4 Star</option>
        <option>5 Star</option>

       </select>
     </div>
     
    </div>

    <label for="name" class="block mb-2 font-bold text-gray-600">Description:</label>
    <textarea id="story" name="description"
          rows="5" placeholder='The quality of the product is awsome...' cols="50" class="border  shadow p-3 w-full rounded ">
</textarea>


       <button   class="block w-full bg-blue-500 text-white font-bold, p-4 rounded-lg">Purchase</button>
    
  
   </form>
 </div>
</div>
    );
};

export default Review;