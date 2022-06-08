import React from "react";
import { NavLink } from "react-router-dom";
import growth from '../src/images/gr.jpg';
import Common from "./Common";

const Home = () =>{
    return (
      <>
        <Common name="Grow your Business with"                 
                visit="/service"
                btname="Get Started"
                imgsrc={growth}
        />
        
      </>
    );
}

export default Home;
