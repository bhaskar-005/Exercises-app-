import React from "react";
import Logo from "../pngs/Logo.png";
import "../styleing/Navbar.css"
import { NavLink } from "react-router-dom";
import Exercise from "./Exercise";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
