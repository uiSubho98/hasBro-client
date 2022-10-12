import React from 'react';
import tools from '../../Assets/llustration/login-icon.png'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import swal from 'sweetalert'

const AddProduct = () => {

    const handleAdd=(e)=>{
        e.preventDefault();
        const name = e.target.productName.value;
        const availableQuantity = e.target.availableStock.value;
        const price = e.target.productPrice.value;
        const minQuantity = e.target.minOrder.value;
        const picture = e.target.productImage.value;
        const description = e.target.productDescription.value;

        const addProduct={
            name: name,
            availableQuantity:availableQuantity,
            price:price,
            minQuantity:minQuantity,
            picture:picture,
            description:description,
            
          }
          console.log(addProduct)
          fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
              swal({
                icon : "success",
                title: "Congrats! Product Added Successfully",
              });
            }
        })
        e.target.reset()
       
    }

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24'>
        <div className="w-[100%] mt-24 lg:ml-24 sm:ml-0">
            <img className='' src={tools} alt=''/>
        </div>

        <div className='lg:mr-24 sm:m-auto'>
        <form action="" onSubmit={handleAdd}>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
    <div class="mb-5">
       <label for="name" class="block mb-2 font-bold text-gray-600">Product Name</label>
       <input type="text"   name="productName"class="border border-gray-300 shadow p-3 w-full  rounded " required/>
     </div>

     <div class="mb-5">
       <label for="twitter" class="block mb-2 font-bold text-gray-600">Available Stock</label>
       <input type="text"   name="availableStock" class="border  shadow p-3 w-full rounded required"/>
     </div>
    </div>
    <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-5">
    <div class="mb-5">
       <label for="name" class="block mb-2 font-bold text-gray-600">Product Image</label>
       <input type="url" name="productImage"class="border border-gray-300 shadow p-3 w-full  rounded  required"/>
     </div>
    </div>

    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
    <div class="mb-5">
       <label for="name" class="block mb-2 font-bold text-gray-600">Product Price (in Dollar)</label>
       <input type="number"  name="productPrice"class="border border-gray-300 shadow p-3 w-full  rounded required"/>
     </div>

     <div class="mb-5">
       <label for="twitter" class="block mb-2 font-bold text-gray-600">Minimum Order</label>
       <input type="number"   name="minOrder" class="border  shadow p-3 w-full rounded required"/>
     </div>
    </div>

    <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-5">
    <div class="mb-5">
       <label for="name" class="block mb-2 font-bold text-gray-600">Product Description</label>
       <input type="text" required  placeholder='Please add description'  name="productDescription"  class="border border-gray-300 shadow p-3 w-full  rounded "/>
     </div>
    </div>
       <button    class="block w-full bg-blue-500 text-white font-bold, p-4 rounded-lg">Add Product</button>
        
  
   </form>
 </div>
</div>
    );
};

export default AddProduct;