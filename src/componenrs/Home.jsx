import React, { useState ,useEffect} from "react";
import Exercise from "./Exercise";
import "../styleing/Home.css";
import "../styleing/color.css";
import Hero from "../pngs/hero-png.png";


const Home = () => {


  return (
    <>
      <div className="hero-div">
        <div className="div-text">
          <h2 className="fit-h2 first-color">Fitness club</h2>
          <h1 className="fit-h1">
            Sweat,Smile <br /> And Repeat
          </h1>
          <p className="fit-p">
            Check out the most effective exercises personalized to you
          </p>
           <button className="hero-button">Exercises</button>
          </div>
           <img src={Hero} alt="hero" className="hero-pic" draggable="false" />
          
          </div>
          <Exercise/>
          </>
  );
}

export default Home;

