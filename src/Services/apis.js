
// const BASE_URL = import.meta.env.BASE_URL
const BASE_URL="https://nice-gold-swallow-yoke.cyclic.app/api";

// const BASE_URL="http://192.168.0.112/api"

console.log(BASE_URL);

export const authEndpoints={
    SEND_OTP_API:`${BASE_URL}/auth/send-otp`,
    VERIFY_OTP_API:`${BASE_URL}/auth/verify-otp`,
    RESEND_OTP_API: `${BASE_URL}/auth/resend-otp`,
    REGISTER_API : `${BASE_URL}/auth/signup`,
    LOGIN_API : `${BASE_URL}/auth/login`,
    FORGOT_PASSWORD_API : `${BASE_URL}/auth/forgot-password`,
    // FORGOT_PASSWORD_OTP_API: `${BASE_URL}/auth/forgot-password-otp`
}