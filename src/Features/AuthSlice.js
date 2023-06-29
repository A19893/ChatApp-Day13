import { createSlice } from "@reduxjs/toolkit";
const initialAuth={
    isAuth:false
}
export const AuthSlice=createSlice({
name:"Authentication",
initialState:initialAuth,
reducers:{
doAuth:(state,action)=>{
    console.log(action);
    state.isAuth=true;
},
removeAuth:(state,action)=>{
    state.isAuth=false;
}
}
})
export const {doAuth,removeAuth}=AuthSlice.actions;
export default AuthSlice.reducer