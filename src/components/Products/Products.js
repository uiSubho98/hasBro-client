import React from 'react';
import { useQuery } from 'react-query';
import Product from '../Product/Product';

const Products = () => {

    const {data:products,isLoading}=useQuery('products',()=>fetch('http://localhost:5000/products').then(res=>res.json()))


if(isLoading){
    return <p>Loading....</p>
}

    return (
        <div className='mt-12'>
            <h1 className='text-5xl  text-center text-primary '>Our <span className='border-b-stone-900 text-primary'>Products</span></h1>
           <div className='grid lg:grid-cols-3 sm:-grid-cols-1 gap-5 h-auto lg:px-12 mt-5'>
           {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;