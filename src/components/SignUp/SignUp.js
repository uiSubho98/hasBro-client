import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../Assets/llustration/login.webp'
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import loginIcon from '../../Assets/llustration/login-icon.png' 

import auth from '../Firebase.init';
import Loading from '../Loading/Loading'
import { useAuthState } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] =useCreateUserWithEmailAndPassword(auth);
      const [User, uLoading, uError] = useAuthState(auth);
      
      const [token] = useToken(User||user||gUser)

      const navigate = useNavigate()

      let signInError;

      if (loading || gLoading || uLoading) {
        return <Loading></Loading>
    }
    if (error || gError || uError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || uError?.message}</small></p>
    }

    if(User){
      navigate('/')
    }




    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
        
    }

    return (
        <div class='grid lg:grid-cols-2 gap-2 sm:grid-cols-1'>
        <div>
     <img src={login} alt="" />
        </div>
        <div class="w-4/5 m-auto bg-indigo-100 rounded p-5">   
   <header>
   <img class="w-20 mx-auto mb-5" src={loginIcon} />
   </header>   
   <form onSubmit={handleSubmit(onSubmit)}>
     <div>
       <label class="block mb-2 text-indigo-500" for="username">Name</label>
       <input class="w-full p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
       />
             <p> {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.name.message}</span>}</p>
     </div>
     <div>
       <label class="block mb-2 text-indigo-500" for="email">Email</label>
       <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email"
       {...register("email", {
        required: {
            value: true,
            message: 'Email is Required'
        },
        pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: 'Provide a valid Email'
        }
    })}
       />
       <p> {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.email.message}</span>}</p>
     </div>
     <div>
       <label class="block mb-2 text-indigo-500" for="password">Password</label>
       <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" 
       {...register("password", {
        required: {
            value: true,
            message: 'Password is Required'
        },
        minLength: {
            value: 6,
            message: 'Must be 6 characters or longer'
        }
    })}

       />
       <p> {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.password.message}</span>}</p>
     </div>
     <div>          
       <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
     </div> 
     {signInError}      
   </form>  
   <footer className='flex justify-center'>
     <p class=" font-bold text-sm float-center" href="#">Have an account?<Link to='/login' className='text-indigo-700 font-bold hover:text-pink-700'>Log In</Link></p>
   </footer> 
   <div class="divider">OR</div>
     <div className='grid lg:grid-cols-1 gap-4 sm:grid-cols-1'>
<div>
<button onClick={() => signInWithGoogle()} class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">Google</button>
</div>

     </div>  
 </div>
    </div>
    );
};

export default SignUp;