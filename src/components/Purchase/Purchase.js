import React, { useEffect, useRef, useState } from 'react';
import auth from '../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import swal from 'sweetalert'
import './Purchase.css'

const Purchase = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const {id} = useParams()
    const userQuantityref = useRef()
    const userAddressref = useRef()
    const [totalPrice,setTotalPrice]=useState(0)
  
    const {data:product,isLoading}= useQuery('product',()=>fetch(`http://localhost:5000/products/${id}`).then(res=>res.json())) 
    if(isLoading){
        return<Loading></Loading>
    }
    const userQuantity=userQuantityref.current?.value;
      const getPrice=(event)=>{
        const userValue= event.target.value;
        const finalPrice = parseFloat(price)* userValue;
        setTotalPrice(finalPrice)
        // console.log(finalPrice)
    } 
  console.log(user)

    const handlePurchase=(event)=>{
        event.preventDefault()
        const address = userAddressref.current?.value
        // console.log(name,email,totalPrice,userQuantity,_id)

      const purchaseOrder={
        orderId:_id,
        email:email,
        name:name,
        totalPrice:totalPrice,
        address:address,
        userQuantity:userQuantity,
        paid:false,
        status:false
        
      }

      console.log(purchaseOrder)

      fetch('http://localhost:5000/order',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(purchaseOrder)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          swal({
            title: "YAY! Your Order is Placed",
            text: "Thank You For Purchase",
            icon: "success",
            buttons: ["Cancel", "Pay Now"],
            closeOnClickOutside: false,
          })
          .then((willPay) => {
            if (willPay) {
              navigate(`/dashboard`)
            }
          });
        }
      })

        
    }
   


    const {email,displayName}= user;
    const {picture,name,minQuantity,availableQuantity,price,_id}= product;

    const minQuantityInt = parseInt(minQuantity)
    const availableQuantityInt = parseInt(availableQuantity)
   
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24'>
            <div className="w-[100%] mt-24 lg:ml-24 sm:ml-0">
                <img className='' src={picture} alt=''/>
            </div>

            <div className='lg:mr-24 sm:m-auto'>
            <form action="">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" value={displayName} required  name="name"class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Email</label>
           <input type="text" value={email} readOnly disabled  name="twitter" class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Product Name</label>
           <input type="text" value={name} readOnly disabled name="productName"class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Price per unit (in Dollar)</label>
           <input type="text" value={price} name="price" readOnly disabled class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Available Quantity</label>
           <input type="text" value={availableQuantity} readOnly disabled name="availableQuantity"class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Minimum Order</label>
           <input type="text" value={minQuantity} readOnly disabled  name="minOrder" class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Order Quantity</label>
           <input type="number"  min={minQuantityInt} placeholder={minQuantityInt} required ref={userQuantityref}  onChange={getPrice}   name="userQuantity"  class="border border-gray-300 shadow p-3 w-full  rounded "/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Total Price (in Dollar)</label>
           <input type="text" value={totalPrice}   name="totalPrice" readOnly class="border  shadow p-3 w-full rounded "/>
         </div>
        </div>

        <label for="name" class="block mb-2 font-bold text-gray-600">Address</label>
           <input type="text" required placeholder='Enter Your Delivery Address'name="address"  ref={userAddressref} class="border border-gray-300 shadow p-3 w-full mb-5  rounded "/>


            {
                userQuantity>availableQuantityInt || userQuantity<minQuantityInt?<button class="block w-full  bg-gray-100 text-black p-4 rounded-lg" disabled>Submit</button>:<button onClick={handlePurchase}  class="block w-full bg-blue-500 text-white font-bold, p-4 rounded-lg">Purchase</button>
            }
      
       </form>
     </div>
   </div>
    );
};


{/*  */}

export default Purchase;