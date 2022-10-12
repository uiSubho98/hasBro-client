import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Firebase.init'
import Loading from '../Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin()
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(!user ){
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;