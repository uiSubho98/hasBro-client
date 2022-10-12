import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaTools} from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
    return (
        <div class="navbar sticky top-0 z-50 font-bold  bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
             {
               user ?  <li tabindex="0">
               <a class="justify-between">
                 Dashboard
                 <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
               </a>
               <ul class="p-2">
               {
             !admin &&  <li><CustomLink to='/dashboard' >My Orders</CustomLink></li>
           }
            {
              !admin && <li><CustomLink to='/dashboard/review'>Add A Review</CustomLink></li>
            }

            {
              admin &&    <li><CustomLink to='/dashboard/makeadmin'>Make Admin</CustomLink></li>
            }
             {
              admin &&    <li><CustomLink to='/dashboard/manageorders'>Manage All Orders</CustomLink></li>
            }

{
              admin &&    <li><CustomLink to='/dashboard/manageproducts'>Manage Products</CustomLink></li>
            }
            {
              admin &&    <li><CustomLink to='/dashboard/addproduct'>Add Product</CustomLink></li>
            }
              <li><CustomLink to='/dashboard/myprofile'>My Profile</CustomLink></li>
               </ul>
             </li>: ''
             }
              <li><CustomLink to={'/blogs'}>Blogs</CustomLink></li>
              <li><CustomLink to={'/myportfolio'}>My Portfolio</CustomLink></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl"><FaTools className='mr-1'></FaTools>HasBro</a>
        </div>
        <div class="navbar-center  hidden lg:flex ">
          <ul class="menu menu-horizontal p-0 mx-2 ">
            <li><CustomLink to='/'>Home</CustomLink></li>
            <li>
              {
                user && <CustomLink to='/dashboard'>Dashboard</CustomLink>
              }
              </li>
              <li><CustomLink to={'/blogs'}>Blogs</CustomLink></li>
            <li><CustomLink to={'/myportfolio'}>My Portfolio</CustomLink></li>
          </ul>
        </div>
        <div class="navbar-end">
    {
      user? <button onClick={logOut} class="btn btn-outline btn-success">Log Out</button> :<Link to='/login' class="btn btn-outline btn-success">Log In</Link>
    }
  </div>
      </div>
    );
};

export default Navbar;