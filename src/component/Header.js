import React from "react";
import logo from "../image/logo2.jpg"

function Header(){
    return(
        <>
        <div className="logo">
        <img src={logo}
        alt="logo"
        className="logo1"
        />
     </div>
       <div className="h"><h1>Daniel Umukoro</h1>
        <h4>Web developer</h4>
        </div>

        <div className="btn">
        <button className="btn1">Email</button>
        <button className="btn2">LinkedIn</button>
        </div>
        </>
    )
}

export default Header