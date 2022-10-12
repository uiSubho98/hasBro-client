import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AllOrderRow = ({allProduct}) => {
    const {name,description,picture,availableQuantity,minQuantity,price,_id}=allProduct;
    const priceInt= parseFloat(allProduct.price)

   const handleDelete=(_id)=>{
       console.log(_id);
       swal({
        title: "Are You Sure?",
        text: `your product name: ${name} will be deleted permanently`,
        icon: "error",
        buttons: ["Cancel", "Delete"],
        closeOnClickOutside: false,
      })
      .then((willPay) => {
        if (willPay) {
          swal("Successfully Deleted", {
            icon: "success",
          });
          fetch(`http://localhost:5000/products/${_id}`,{
            method:'Delete',
        })
        .then(res=>res.json())
                      .then(data=>console.log(data))
        } 
      });
    
   }
   

   


    return (
        <div>
        <div class="overflow-x-auto w-full">
<table class="table w-full">
{/* <!-- head --> */}
<thead>
  <tr>
    <th>Product</th>
    <th>Name</th>
    <th>Available Quantity</th>
    <th>Price</th>
    <th>Cancel</th>
  </tr>
</thead>
<tbody>
<tr>
            <td>
            <div class="avatar">
              <div class="mask mask-circle w-14 ">
                <img src={picture} />
              </div>
              </div>
            </td>
                <td>
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="font-bold">{name}</div>
                    </div>
                  </div>
                </td>
                <td>
               <div>{availableQuantity} Pieces</div>
                </td>
                <td>$ {priceInt}</td>
                <th>
                <button onClick={()=>handleDelete(_id)} class="btn btn-outline btn-error">Cancel</button>
                </th>
              </tr>
  </tbody>
   
  </table>
</div>
        </div>
    );
};

export default AllOrderRow;