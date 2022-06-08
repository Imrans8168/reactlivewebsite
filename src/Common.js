import React from "react";
import { NavLink } from "react-router-dom";
import growth from '../src/images/gr.jpg';

const Common = (props) =>{
    return (
      <>
        <section id="header" className="">
          <div className="container-fluid nav_bg">
            <div className="row ">
              <div className="col-10 mx-auto datacontainer">
              <div className="row">              
                  <div className="col-md-6 pt-5 pt-lg-0 order-lg-1">
                      <h1>{props.name} <strong className="brand-name" > IMRAN</strong></h1>
                      <h2 className="my-3">
                        We are  the team of talented Developers
                      </h2>
                      <div className="mt-3 ">
                        <NavLink to={props.visit} className="btn-get-started"> {props.btname}</NavLink>
                      </div>
                  </div>
                  <div className="col-lg-6 order-lg-1 header-img">
                    <img src={props.imgsrc} alt="imagehome" className="imghome" />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Common;
