import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchUser } from '../Features/UserSlice'; 
const SearchBar = () => {
  const[inp,setInp]=useState("");
  const dispatch=useDispatch();
  const handleKey=(e)=>{
    if(e.code==="Enter"){
      dispatch(searchUser(inp));
    }
  }
  return (
    <>
    
    </>
  )
}

export default SearchBar