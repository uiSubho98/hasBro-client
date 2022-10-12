import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate()
    const {name,price,description,availableQuantity,minQuantity,picture}=product;

    const handlePurchase =() =>{
      navigate(`/purchase/${product._id}`)
    }
    return (
       <div>
           <div class="card card-compact w-96 h-full bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" className='object-contain h-48' /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description.slice(0,50)}... <span>Read More</span></p>
    <p>Price: {price} (per piece in Dollar)</p>
    <p>Available Stock: {availableQuantity}</p>
    <p>Minimum Order Quantity: {minQuantity}</p>
    <div class="card-actions justify-center">
      <button onClick={handlePurchase} class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
       </div>
    );
};

export default Product;