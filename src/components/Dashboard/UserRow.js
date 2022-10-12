import React from 'react';
import swal from 'sweetalert'

const UserRow = ({user,refetch}) => {
    const {email,role,_id}=user

const handleDelete=(_id)=>{
    swal({
        title: "Are You Sure to Delete?",
        text:  'Are You Sure?',
        icon: "error",
        buttons: ["Cancel", "Delete"],
        closeOnClickOutside: false,
      })
      .then((willPay) => {
        if (willPay) {
            swal("Item Deleted!", "Successfully Item Deleted!", "success")
            const url= `http://localhost:5000/user/${_id}`
            fetch(url,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){
                refetch()
                swal({
                 closeOnClickOutside: false,
                 icon: "success",
                 title: "Item Deleted",

               });
             }
         })
        } 
      });
}




    const makeAdmin =()=>{

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert('failed to makeAdmin')
                }
                return res.json()
            })
            .then(data => {
               if(data.modifiedCount>0){
                   refetch()
                   swal({
                    closeOnClickOutside: false,
                    icon: "success",
                    title: "Admin Created",

                  });
               }
                
            })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
            {
                role !=='admin' && <button class="btn btn-xs btn-primary" onClick={makeAdmin}>Make Admin</button>
            }
           
        </td>
        <td><button onClick={()=>handleDelete(_id)} class="btn btn-xs">Remove User</button></td>
      </tr>
        
    );
};

export default UserRow;