import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

import swal from 'sweetalert';

import ProfileCard from './ProfileCard';

const MyProfile = () => {
    const [user] = useAuthState(auth);
  


    const handleProfile =(e)=>{
        e.preventDefault()
        const name= e.target.name.value;
        const email = user?.email;
        const userImage = e.target.userImage.value
        const eductaion = e.target.education.value
        const address = e.target.address.value;
        const url=e.target.linkedinURL.value;
        const userProfile={
            name:name,
            email:email,
            userImage:userImage,
            education:eductaion,
            address:address,
            url:url,
        }

        fetch(`http://localhost:5000/profile/${user?.email}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                e.target.reset()
                swal({
                    icon: "success",
                    title: "Profile Updated",

                  });
            }
        })
    }

    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
  <ProfileCard></ProfileCard>
    <div class="divider lg:divider-horizontal">OR</div> 
    <div>
    <form action="" onSubmit={handleProfile}>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text"  name="name"class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Email</label>
           <input type="text" value={user?.email} read name="email" class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Photo</label>
           <input type="text" name="userImage" class="border  shadow p-3 w-full rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Education</label>
           <input type="text" name="education"  class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>

        <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Address</label>
           <input type="text"  name="address"class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>
        </div>

        <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Linkedin URL</label>
           <input type="text"  placeholder='Please Give Your Order Quantity'  name="linkedinURL"  class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>
        </div>
<button  class="block w-full bg-blue-500 text-white font-bold, p-4 rounded-lg">Update Profile</button>
           
      
       </form>
    </div>
  </div>
</div>
    );
};

export default MyProfile;