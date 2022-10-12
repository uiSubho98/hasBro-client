import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AllOrderRow from './AllOrderRow';
import Loading from '../Loading/Loading'

const ManageProducts = () => {
const [allProducts,setAllProducts] = useState([])
useEffect(()=>{
    fetch(`http://localhost:5000/products`,{
        method:'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{setAllProducts(data)})
},[allProducts])
    return (
        <div className='grid lg:grid-cols-1 sm:-grid-cols-1 mx-auto gap-28  h-auto lg:px-12 mt-5'>
            {
                allProducts.map(allProduct=><AllOrderRow key={allProduct._id} allProduct={allProduct}></AllOrderRow>)
            }
        </div>
    );
};

export default ManageProducts;


// ()=>fetch(`http://localhost:5000/products`,{
        
//         })
        
//         .then(res=>res.json())) 
//         console.log(orders);
