import React from "react";
import { NavLink } from "react-router-dom";
import gr1 from '../src/images/gr1.jpg';
import Common from "./Common";

const About = () =>{
    return (
      <>
         <Common name="Welcome to About page" 
                imgsrc={gr1}
                visit="/contact"
                btname="Contact us"
        />
      </>
    );
}

export default About;
