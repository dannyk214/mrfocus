import React from "react";
import logo from "../image/logo.png"

function Header(){
    return(
        <>
        <div className="logo">
        <img src={logo}
        alt="logo"
        className="logo1"
        />
     </div>
       <div className="h"><h1>Edoghaeobare Aisosa Emmanuella</h1>
        </div>

        <div className="btn">
        <button className="btn1">Email</button>
        <button className="btn2">LinkedIn</button>
        </div>
        </>
    )
}

export default Header