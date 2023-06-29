import { createSlice } from "@reduxjs/toolkit";
const initialData={
    Username:null,
    UserDetail:{},
    ParticularUser:null,
    CurrentChatRoomId:null,
    SearchUser:null,
    LoggedInUserId:null,
    SelectedUserData:null
}
export const UserSlice=createSlice({
    name:"UserDetails",
    initialState:initialData,
    reducers:{
     saveUsername:(state,action)=>{
      console.log(action);
       state.Username=action.payload.email;
       state.LoggedInUserId=action.payload.uid;
     },
     saveUserDetails:(state,action)=>{
      state.UserDetail.uid=action.payload.uid;
      state.UserDetail.email=action.payload.email;
      state.UserDetail.name=action.payload.name;
      state.UserDetail.id=action.payload.id;
      console.log(action);
     },
     showParticularUser:(state,action)=>{
        state.ParticularUser=action.payload
        console.log(action);
     },
     CurrentChatRoomId:(state,action)=>{
        state.CurrentChatRoomId=action.payload;
     },
     savesenderid:(state,action)=>{
        state.UserDetail.senderid=action.payload;
     },
     searchUser:(state,action)=>{
      state.SearchUser=action.payload;
      console.log(action);
     }
    }
})
export const {saveUsername,saveUserDetails,showParticularUser,CurrentChatRoomId,savesenderid,searchUser}=UserSlice.actions
export default UserSlice.reducer