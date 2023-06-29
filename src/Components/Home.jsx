import React from "react";
import ParticularUser from "./ParticularUser";
import Navbar from './Navbar'
import Users from "./Users";
const Home = () => {
  return (
    <>
      <div className="chatContainer">
        <div className="appContainer">
           <Navbar/>
          <div className="userDisplay">
            <Users/>
          </div>
        </div>
       <ParticularUser/>
      </div>
    </>
  );
};

export default Home;
