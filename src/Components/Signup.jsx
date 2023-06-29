import React, { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { doAuth } from "../Features/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { saveUsername,saveUserDetails } from "../Features/UserSlice";
import icon from '../Assets/upload.png'
import { db } from "../config/Firebase";
import { collection,addDoc,getDocs} from "firebase/firestore";

const Signup = () => {
  const loggedInUserEmail=useSelector((state)=>state.userdetails.Username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setname]=useState(""); 
  // var res=null;
  const addUser = async (res)=>{
  try{
    console.log("yeh response hai",res)
    const uid=res.user.uid;
    const email=res._tokenResponse.email;
    const name=res.displayName;
    const id=Date.now();
    console.log("jo data aara hai",uid,name,email,id)
    const docRef=await addDoc(collection(db,"Users"),{
      uid:res.user.uid,
      name:res.displayName,
      email:res._tokenResponse.email,
      userid:Date.now()
    });
    dispatch(saveUserDetails({uid,email,name,id}))
    console.log("data add hua hai",docRef.id)
  }catch(err){
    console.log(err);
  }
  }
  const signin = async () => {
    try {
      const data =await getDocs(collection(db,"Users"))
      const users=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
      const filteredData=users.filter((item)=> {
        return email===item.email
      });
      if(filteredData.length>0){
        dispatch(doAuth());
        navigate("/login")
      }
      else{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      res.displayName=name;
      dispatch(doAuth());
      await addUser(res);
      navigate("/login")
      }
    } catch (err) {
      console.log(err);
    }
  };
  const signingoogle = async () => {
    try {
       const res = await signInWithPopup(auth, googleProvider);
      console.log("google se sign in krkre hai",res);
      dispatch(doAuth());
      dispatch(saveUsername(res._tokenResponse.email));
      const data =await getDocs(collection(db,"Users"))
      const users=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
      const filteredData=users.filter((item)=> loggedInUserEmail===item.email);
      console.log("yeh data hai",filteredData)
      if(filteredData.length>0){
      navigate("/home")
      }
      else{
      // setTimeout(async()=>{
        await addUser(res);
      // },1000)
      navigate("/home")
      }
    } catch (err) {
      alert("You are already a registered user!!")
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="signupcontainer">
          <div className="signupimgcontainer">
            <img className="signup-img"src="https://img.freepik.com/premium-vector/happy-people-use-mobile-smartphone_165488-4717.jpg?w=1380" alt="misssing"/>
          </div>
          <div className="signupinput">
            <div className="inpdetails">
            <input
              type="name"
              placeholder=" Name.."
              onChange={(e) => setname(e.target.value)}
            />
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
            <input style={{display:"none"}}type="file" id="file"/>
            <label htmlFor="file">
                <img style={{height:"30px",width:"30px",cursor:"pointer"}}src={icon} alt="missing"/>
                <span style={{fontSize:"12px",fontWeight:"bold"}}>Add an Avatar</span>
            </label>

            <button onClick={signin}>Sign In</button>
            <button onClick={signingoogle}>Sign in with Google</button>
            <Link to="/login" className="links">Already a Registered User?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
