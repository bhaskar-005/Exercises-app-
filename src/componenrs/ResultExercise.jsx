import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResultExercise = ({ bodypart }) => {
  const navigate = useNavigate();

  // navigate function
  const routeNavigate = (bodydata) => {
    navigate(`/exercise/${bodydata.id}`, { state: bodydata });
  };
  
  return (
    <div id="resultExercise">
      <h1>showing results</h1>
      {bodypart?.map((bodydata, index) => (
        <Link to={`/exercise/${bodydata.id}`}>
        <div
          key={index}
        >
          <img src={bodydata.gifUrl} alt="img" />
          <h3>{bodydata.name}</h3>
        </div>
         </Link>
      ))}
    </div>
  );
};

export default ResultExercise;
