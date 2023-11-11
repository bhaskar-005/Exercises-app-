import React from "react";
import Pic from "../pngs/pic.png";
import "../styleing/Sectioncard.css";
import FatchData from "../utils/FatchData";

const Sectioncard = ({ item, index, setbodypart }) => {
  const PartclickHandler = () => {
    FatchData(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${item}`
    ).then((data) => {
      setbodypart(data);
      console.log(item);
    });
  };
  return (
    <div className="main-card-container">
      <div className="main-card-div" onClick={PartclickHandler}>
        <img src={Pic} alt="" className="pic" />
        <h3 key={index} className="bodypart-text">
          {item}
        </h3>
      </div>
    </div>
  );
};
export default Sectioncard;
