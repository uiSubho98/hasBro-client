import React from 'react';
import swal from 'sweetalert';
import './AdminOrder.css'

const AdminOrder = ({AllSingleOrder}) => {
    const {paid,_id,name}=AllSingleOrder;


    const handleStatus=(e)=>{
        e.preventDefault()
        const currentStatus= e.target.value
        const payment={
            status:currentStatus
        }
        console.log(_id)
        fetch(`http://localhost:5000/order/${_id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                swal({
                    icon: "success",
                    title: "Status Updated",

                  });
            }
        })
    }



    const handleDelete=(_id)=>{
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
              <th>1</th>
              <td>{AllSingleOrder.name}</td>
              <td>{AllSingleOrder.email}</td>
              <td>{
                  paid ? <select onChange={handleStatus} name="status" className='btn btn-outline btn-success' id="paymentStatus">
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                </select>:<button className='btn btn-outline btn-accent'>Not Paid</button>
              
              }</td>

               <td>{
                   !paid ? <button className='btn btn-outline btn-error ' onClick={()=>handleDelete(_id)}>Cancel</button>:''
                   }</td>
             
            </tr>
      
    );
};

export default AdminOrder;



{/*  */}