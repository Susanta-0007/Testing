import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Emailverify from "./Pages/Emailverify";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import {
  DashboardPrivateRoute,
  AuthPrivateRoute,
  VerifyOTPPrivateRoute,
} from "./Components/Core/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>

       //* Home Route
        <Route
          path="/"
          element={
            <AuthPrivateRoute>
              <Login />
            </AuthPrivateRoute>
          }
        ></Route>

        //* Login Route
        <Route
          path="/login"
          element={
            <AuthPrivateRoute>
              <Login />
            </AuthPrivateRoute>
          }
        ></Route>

        //* Register Route
        <Route
          path="/register"
          element={
            <AuthPrivateRoute>
              <Register />
            </AuthPrivateRoute>
          }
        ></Route>

        //* Forgot Password Route
        <Route
          path="/fogot-password"
          element={
            <AuthPrivateRoute>
              <ForgotPassword />
            </AuthPrivateRoute>
          }
        ></Route>

        //* Update Password Route
        <Route
          path="/update-password"
          element={
            <AuthPrivateRoute>
              <UpdatePassword />
            </AuthPrivateRoute>
          }
        ></Route>

        //* Verify OTP Route
        <Route
          path="/verify-email"
          element={
            <VerifyOTPPrivateRoute>
              <Emailverify />
            </VerifyOTPPrivateRoute>
          }
        ></Route>

        {/* <Route path="/dashboard" element={<Dashboard/>} > */}
          

        {/* </Route> */}

        //* Dashboard Route
        <Route
          path="/dashboard"
          element={<DashboardPrivateRoute>
            <Dashboard />
          </DashboardPrivateRoute>} >

          {/* <Route path="/dashboard/overview" element={<Overview/>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
