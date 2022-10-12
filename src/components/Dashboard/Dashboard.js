import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../Firebase.init';
import './Dashboard.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import useAdmin from '../../hooks/useAdmin'
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label for="my-drawer-2" class=" lg:hidden"></label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
           {
             !admin &&  <li><Link to='/dashboard'>My Orders</Link></li>
           }
            {
              !admin && <li><Link to='/dashboard/review'>Add A Review</Link></li>
            }
            {
              admin &&    <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
            }
             {
              admin &&    <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>
            }

{
              admin &&    <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
            }
            {
              admin &&    <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            }

            
               <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
            
            
          
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;