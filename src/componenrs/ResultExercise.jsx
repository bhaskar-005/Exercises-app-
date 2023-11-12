import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const ResultExercise = ({ bodypart,load}) => {
  const navigate = useNavigate();

  // navigate function
  const routeNavigate = (bodydata) => {
    navigate(`/exercise/${bodydata.id}`, { state: bodydata });
  };
  
  return (
    load ?(
      <Loading/>
    ):(
      <div id="resultExercise">
      <h1>showing results</h1>
      {bodypart?.map((bodydata, index) => (
        <Link to={`/exercise/${bodydata.id}`}>
        <div
          key={bodydata.id}
        >
          <img src={bodydata.gifUrl} alt="img" />
          <h3>{bodydata.name}</h3>
        </div>
         </Link>
      ))}
    </div>
    )
  );
};

export default ResultExercise;
