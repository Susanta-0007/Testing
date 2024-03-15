import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Dashboard from '../../../Pages/Dashboard';

//* Dashboard Private Route .

export const DashboardPrivateRoute = ({children}) => {
    
    const token =useSelector((state)=>state.auth.token);

    if(token !== null){
        return <Dashboard/>;
    }
    else{
        return <Navigate to={"/login"} />
    }
}

//* Login, Register, Forgot Password, Update Password Private Route .

export const AuthPrivateRoute=({children})=>{

    const token =useSelector((state)=>state.auth.token);

    if(token === null){
        return children;
    }
    else{
        return <Navigate to={"/dashboard/overview"} />
    }
}

//* Verify OTP Private Route . 

export const VerifyOTPPrivateRoute=({children})=>{
    const signUpData=useSelector((state)=>state.auth.signUpData);
    const forgotEmailData=useSelector((state)=>state.auth.forgotEmailData);

    if(signUpData !== null || forgotEmailData !== null ){
        return children;
    }

}
