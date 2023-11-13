import React, { useState } from "react";
import Logo from "../pngs/Logo.png";
import "../styleing/Navbar.css"
import { NavLink } from "react-router-dom";
import Exercise from "./Exercise";
import xmark from '../pngs/xmark-solid.svg';
import bars from '../pngs/bars-solid.svg';
import Smallscreen from "./Smallscreen";

const Navbar = () => {
  const [nav ,setnav] = useState(false); 
  return (
    <div className="navbar-main">
      <a href="/">
        <img src={Logo} alt="logo" className="logo" />
      </a>
      <div>
        <ul className="Ul-tag">
          <NavLink  className="Navlink" to ={"/"}><li>Home</li></NavLink> 
           <a className="Navlink" href="#resultExercise"><li>Exercise</li></a>
            <NavLink className="Navlink"  to={'/about'}><li>About</li></NavLink> 
       </ul> 
       <div onClick={()=>setnav(!nav)}>
         {
          nav?(
            <img src={xmark}className="bar-img-nav" />
          ):(
            <img src={bars} className="bar-img-nav" />
          )
         }
         {nav ? <Smallscreen /> : null}

        </div> 
       
      </div>
    </div>
  );
};

export default Navbar;
