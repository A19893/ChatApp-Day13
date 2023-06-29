import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doAuth } from "../Features/AuthSlice";
import { saveUsername,saveUserDetails } from "../Features/UserSlice";
import { updateStatus } from "../Utils/updateStatus";
const Login = () => {
  const[email,setemail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const login=(e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    const user=userCredential.user;
    console.log("logged in from login page",user)
    dispatch(doAuth());
    navigate("/home");
    const email=user.email;
    updateStatus(email)
    const uid=user.uid;
    dispatch(saveUsername({email,uid}));
   })
   .catch((err)=>{
    alert("User Credentials Not Valid!!")
    console.log(err);
   })
  }
  return (
    <>
      <div className="container">
        <div className="signupcontainer">
          <div className="signupimgcontainer">
            <img className="signup-img"src="https://img.freepik.com/free-vector/speech-bubbles-collection_23-2147512511.jpg?w=826&t=st=1687777346~exp=1687777946~hmac=651a8f0f208fb40ba34a37b327fb6824ceba38ad3b61c81b9016b04b3d5d9adb" alt="misssing"/>
          </div>
          <div className="signupinput">
            <div className="inpdetails">
            <input
              type="email"
              placeholder=" Mail"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <Link to="/" className="links">Not a Registered User?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
