import React, { useRef, useState } from 'react';
import login from '../../Assets/llustration/login.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import loginIcon from '../../Assets/llustration/login-icon.png' 
import useToken from '../../hooks/useToken';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import swal from 'sweetalert';


const Login = () => {
  const [title, setTitle] = useState('')
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] =  useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(
    auth
  );
  const [User, uLoading, uError] = useAuthState(auth);
  const navigate = useNavigate()
  const location = useLocation();

  const [token] = useToken(User||user||gUser)

let from = location.state?.from?.pathname || "/";

  if(User){
    navigate(from,{replace:true})
  }

  // if(Loading || gLoading){
  //   return <Loading></Loading>
  // }


  const handleLogIn = (event) =>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    signInWithEmailAndPassword(email, password)

  }

    return (
       <div class='grid lg:grid-cols-2 gap-2 sm:grid-cols-1'>
           <div className='w-full'>
        <img src={login} className='w-full' alt="" />
           </div>
           <div class="w-4/5 m-auto bg-indigo-100 rounded p-5">   
      <header>
        <img class="w-20 mx-auto mb-5" src={loginIcon} />
      </header>   
      <form onSubmit={handleLogIn}>
        <div>
          <label class="block mb-2 text-indigo-500" for="email">Email</label>
          <input onChange={event => setTitle(event.target.value)} class="w-full p-2 mb-6 req text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="email" required/>
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" required/>
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
        </div>       
      </form> 
      <p className='text-red-500 font-bold'>{error?.message}</p> 
      <footer>
        <button  onClick={async () => {
          if(title){
            await sendPasswordResetEmail(title);
            swal({
              icon: "success",
              title: "Please Check Your Email",
  
            });
          }
          else if(title ===''){
            swal({
              icon: "error",
              title: "Please Give Your Email",
  
            });
          }
        }} class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</button>
        <Link class="text-indigo-700 hover:text-pink-700 text-sm float-right" to='/signup'>Create Account</Link>
      </footer>   
      <div class="divider">OR</div>
   
<div>
<button  onClick={() => signInWithGoogle()} class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">Google</button>


     </div>
    </div>
       </div>
    );
};

export default Login;