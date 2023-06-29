import React, { useEffect, useState } from 'react'
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch } from "react-redux";
import { removeAuth } from "../Features/AuthSlice";
import { CurrentChatRoomId } from '../Features/UserSlice';
import { collection,getDocs } from "firebase/firestore";
import { db } from '../config/Firebase';
import { updateStatusFalse } from "../Utils/updateStatus";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name,setName]=useState(null);
  const Username=useSelector((state) => state.userdetails.Username);
  useEffect(()=>{
    const fetchData=async()=>{
        const data =await getDocs(collection(db,"Users"))
        const users=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
        const Filtereddata=users.filter((item)=>{
            return item.email===Username
        })
        console.log(Filtereddata)
        setName(Filtereddata[0].name)
        }
        fetchData();
  },[])
    const logout = async () => {
        try {
          const res = await signOut(auth);
          console.log(res);
          dispatch(removeAuth());
          dispatch(CurrentChatRoomId(null));
          updateStatusFalse(Username)
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <>
    <div className="appTitle">
            <div className="appname">
              <h1
                style={{ margin: "0px", fontSize: "18px", paddingTop: "30px",paddingLeft:"15px" }}
              >
                WeChat
              </h1>
            </div>
            <div className="logoutbtn">
              <img
                style={{ height: "30px", marginRight: "15px" }}
                src="https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png"
                alt="missing"
              />
              <h4 style={{ margin: "0px", marginTop: "5px" }}>{name}</h4>
              <button
                style={{
                  height: "25px",
                  marginLeft: "15px",
                  marginTop: "4px",
                  fontWeight: "bold",
                  backgroundColor: "rgb(97, 92, 139)",
                  cursor: "pointer",
                  color:"white",
                  border:"none"
                }}
                onClick={logout}
              >
                logout
              </button>
            </div>
            </div>
            </>
  )
}

export default Navbar