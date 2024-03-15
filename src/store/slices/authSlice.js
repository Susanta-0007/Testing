import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null ,
        // token:null,
        signUpData:null,

        loginData:null,

        forgotEmailData:null,

        isRegister:false
        
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload;
        },
        setSignUpData(state,action){
            state.signUpData=action.payload;
        },
        setLoginData(state,action){
            state.loginData=action.payload;
        },
        setForgotEmailData(state,action){
            state.forgotEmailData=action.payload;
        },
        setIsRegister(state,action){
            state.isRegister=action.payload;
        }

    }
});

export const {setToken,setSignUpData,setLoginData,setForgotEmailData,setIsRegister} = authSlice.actions;
export default authSlice.reducer;
