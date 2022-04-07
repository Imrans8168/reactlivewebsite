import React from "react";
import service from '../src/images/service.jpg'
import { NavLink } from "react-router-dom";

const Service = () =>{
    return (
      <>
        <div className="service datacontainer col-10 mx-auto">
          <h1>Our Services </h1>
              <div class="card">
                  <img src={service} class="card-img-top" alt="..."/>
                  <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
               </div>
         </div>      
       
        </div>
      </>
    );
}

export default Service;
