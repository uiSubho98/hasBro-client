import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Loading/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {

    const [orders,setOrders]=useState([]);
    const [user, uLoading, uError] = useAuthState(auth);

    // console.log(orders)

    const navigate = useNavigate()

    useEffect(()=>{
       if(uLoading){
        return <Loading></Loading>
       }
       else{
        fetch(`http://localhost:5000/order/${user?.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status ===401){
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/home')
            }
            else if(res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/home')
            }
            return res.json()
        })
        .then(data=>{

            setOrders(data)
        })
       }
},[user,orders])




    return (
        <div>
            <h2>My ORder{orders.length}</h2>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Status</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
      
       {
             orders.map(eachO=> <MyOrderRow key='eachO._id' order={eachO}></MyOrderRow>)
        }
      
           
       
    
     
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default MyOrders;