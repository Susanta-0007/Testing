import { createSlice } from "@reduxjs/toolkit";

const dashboardRouteSlice=createSlice({
    name:"dashboardRoute",
    initialState:{
        activeRoute: 1.1,
        hamburgerIcon : false
    },
    reducers:{
        setActiveRoute(state,action){
            state.activeRoute=action.payload;
        },
        setHamburger(state,action){
            state.hamburgerIcon=action.payload;
        }
    }
});

export const {setActiveRoute ,setHamburger} = dashboardRouteSlice.actions;
export default dashboardRouteSlice.reducer;
