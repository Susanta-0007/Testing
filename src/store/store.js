import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import profileReducer from "./slices/profileSlice"
import dashboardRouteReducer from "./slices/dashboard_route_slice"

const RootReducer=combineReducers({
    auth: authReducer,
    profile: profileReducer,
    dashboardRoute: dashboardRouteReducer
})

const store=configureStore({
    reducer: RootReducer
})



export default store;