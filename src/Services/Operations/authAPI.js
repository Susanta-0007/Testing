import toast from "react-hot-toast";
import { setToken,setIsRegister } from "../../store/slices/authSlice";
import { setUser } from "../../store/slices/profileSlice";
import { authEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const { SEND_OTP_API,VERIFY_OTP_API,RESEND_OTP_API, REGISTER_API, LOGIN_API, FORGOT_PASSWORD_API} =
    authEndpoints;

export const sendOTP = (email, isRegister, navigate) => {

    return async (dispatch) => {
        const toastId = toast.loading("Loading ...");

        try {
            // console.log("SEND_OTP_API: ", SEND_OTP_API);
            const response = await apiConnector("POST", SEND_OTP_API, {
                email,
                isRegister,
            });

            console.log("SENT_OTP_API response", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("OTP SENT");

            navigate("/verify-email");
        } catch (error) {
            console.log("SENDOTP API ERROR............", error);
            toast.error("Could Not Send OTP");
        }
        toast.dismiss(toastId);
    };
};

export const login = (email, password, navigate) => {
    return async (dispatch) => {

        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            });
            console.log("LOGIN_API response", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Login Successful")
            dispatch(setToken(response.data.token));


            dispatch(setUser({ ...response.data.user }));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard")
        } catch (error) { 
            console.log("LOGIN API ERROR",error);
            toast.error("Login Failed")
        }
        toast.dismiss(toastId);
    };
};

export const register=(accountType,firstName,lastName,email,password,confirmPassword,navigate)=>{

    console.log(accountType,firstName,lastName,email,password,confirmPassword);

    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",REGISTER_API,{
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                accountType
            })

            console.log("REGISTER_API response",response);
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Register Successful");
            navigate("/login");
        }
        catch(error){
            console.log("REGISTER_API error",error);
            toast.error("Register Failed");
            navigate("/register");
        }
        toast.dismiss(toastId)
    }
}

export const verifyOTP = (email, otp,isRegister,signUpData, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading ...");

        try {
            // console.log("SEND_OTP_API: ", SEND_OTP_API);
            const response = await apiConnector("POST", VERIFY_OTP_API, {
                email,
                otp,
            });

            console.log("VERIFY_OTP_API response", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("OTP VERIFIED");

            // setIsRegister(true);
            console.log(isRegister);

            if(isRegister){
                const {accountType,firstName,lastName,email,password,confirmPassword}=signUpData;
                dispatch(register(accountType,firstName,lastName,email,password,confirmPassword,navigate));
            }
            else{
                navigate("/update-password")
            }
        } catch (error) {
            console.log("VERIFY_OTP_API ERROR............", error);
            toast.error("OTP Verify Failed");
        }
        toast.dismiss(toastId);
    };


}

export const resndOTP=(email)=>{
    return async (dispatch) => {
        const toastId = toast.loading("Loading ...");

        try {
            // console.log("SEND_OTP_API: ", SEND_OTP_API);
            const response = await apiConnector("POST", RESEND_OTP_API, {
                email,
            });

            console.log("RESEND_OTP_API response", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("OTP RESENT");

            // setIsRegister(true);
            // navigate("/verify-email");
        } catch (error) {
            console.log("RESEND_OTP_API ERROR............", error);
            toast.error("Could Not Resend OTP");
        }
        toast.dismiss(toastId);
    };
}

export const forgotPassword=(email, newPassword, reEnterNewPassword,navigate)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",FORGOT_PASSWORD_API,{
                email,
                newPassword,
                reEnterNewPassword
            })

            console.log("FORGOT_PASSWORD_API response",response);
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Password Updated Successful");
            navigate("/login");
        }
        catch(error){
            console.log("FORGOT_PASSWORD_API error",error);
            toast.error("Password Failed");
            navigate("/login");
        }
        toast.dismiss(toastId)
    }
}
