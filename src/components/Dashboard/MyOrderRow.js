import React, { useState } from 'react';
import swal from 'sweetalert'
import { Link} from 'react-router-dom';

const MyOrderRow = ({order}) => {
    const {name,userQuantity,totalPrice,picture,_id,paid,status}=order;
    const [paidOrder,setPaidOrder]=useState({})
  
    const [pay,setPay]=useState(false)
    

    const handleDelete= ()=>{
            swal({
                title: "Are You Sure to Delete?",
                text: `Item Name: ${name}`,
                icon: "error",
                buttons: ["Cancel", "Delete"],
                closeOnClickOutside: false,
              })
              .then((willPay) => {
                if (willPay) {
                    swal("Item Deleted!", "Successfully Item Deleted!", "success")
                    const url= `http://localhost:5000/order/${_id}`
                    fetch(url,{
                      method:'DELETE'
                  })
                  .then(res=>res.json())
                  .then(data=>{
                      if(data.deletedCount>0){
                     }
                 })
                } 
              });
        }




   
    return (
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
               <div>{userQuantity} Pieces</div>
                </td>
                <td>$ {totalPrice}</td>
                <td>
                {
                  paid? <p className='text-green-500'>Already Paid</p>:<Link to={`/dashboard/payment/${_id}`}><button class="btn btn-outline btn-primary">Pay Now</button></Link>
                }
                </td>
                <td>{
                status === 'pending' || status==='shipped' ? <button>{status}</button>:''
             
                }</td>
                <th>
                <button onClick={handleDelete} class="btn btn-outline btn-danger">Cancel</button>
                </th>
              </tr>)
  
};

export default MyOrderRow;