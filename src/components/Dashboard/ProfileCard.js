import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import './ProfileCard.css'

const ProfileCard = () => {
    const [profile,setProfile] = useState({})
    const [user] = useAuthState(auth);

    useEffect(()=>{
        fetch(`http://localhost:5000/profile/${user?.email}`, {
        method:'GET',
        headers: {
            'content-type': 'application/json',
        }
    })
    .then(res=>res.json())
    .then(data => {
        setProfile(data)
       
    })
    },{user})

    console.log(profile);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={profile?.userImage} alt="User_Image" className='w-40' /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {profile?.name}
      <div class="badge badge-secondary">{profile?.email}</div>
    </h2>
    <p><span className='font-bold'>Education:</span>{profile?.education}</p>
    <p><span className='font-bold'>Address:</span>{profile?.address}</p>
   <a className='text-success font-bold' href={profile?.url}>Visit LinkedIn Profile</a>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">HasBro Profile</div> 
    </div>
  </div>
</div>
    );
};

export default ProfileCard;