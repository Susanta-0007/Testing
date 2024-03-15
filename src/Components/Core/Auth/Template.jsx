import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthBgImage from "../../../assets/AuthBgImage.svg";
import ForgotPasswordForm from "./ForgotPasswordForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

// import registerAuthBg from "../../../assets/authimages/register-bg.jpg";
import RegisterBG from "./RegisterBG";
import LoginBG from "./LoginBG";


const Template = ({ formType }) => {

    // console.log(formType);

    const isLogin = (formType === "Login");
    const isRegister = (formType === "Register");
    const isUpdatePassword = (formType === "updatePassword");


    return (
        <div className={`h-[100vh] w-full flex  justify-between ${!isRegister ? " flex-row" : "flex-row-reverse"}`}>
            {/* Left Div Form Div */}
            <div className="flex flex-col justify-start items-center w-[100%] mobile:w-[60%] tablet:w-[50%]  gap-24 ">
                <div className="w-full">
                    {
                        isLogin ? (<LoginForm />) :
                            (
                                isRegister ? (<RegisterForm />) :
                                    (
                                        isUpdatePassword ? (<UpdatePasswordForm />) : (<ForgotPasswordForm />)
                                    )
                            )
                    }
                </div>
            </div>

            {/* Righgt Div Image Div */}
            <div className=" h-full w-[50%] bg-[#3A8064] hidden mobile:flex    ">
                {/* <div className="text-xl font-semibold text-white py-4 px-4">Get a good health routine</div>
               <img className="w-[90%] h-[70%]   " src={loginAuthBg} alt="" />
               <div className="text-xl font-semibold text-white px-4 py-2">With PulsePro</div> */}

                {
                    isLogin ? (<LoginBG />) :
                        (
                            isRegister ? (<RegisterBG />) : 
                            (
                                isUpdatePassword ? (<LoginBG />) : (<LoginBG />)
                            )

                        )
                }

            </div>
        </div>
    );
}

export default Template;