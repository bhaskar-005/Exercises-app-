import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../styleing/resultExercise.css";

const ResultExercise = ({ bodypart, load }) => {
  const navigate = useNavigate();

  // navigate function
  const routeNavigate = (bodydata) => {
    navigate(`/exercise/${bodydata.id}`, { state: bodydata });
  };

  return (
    <div className="exercise-top-div">
      {load ? (
        <Loading />
      ) : (
        <div>
          <h1>Showing Results</h1>
          <div className="result-exercise-div">
            {bodypart?.map((bodydata) => (
              <Link
                to={`/exercise/${bodydata.id}`}
                className="exercise-link-card"
              >
                <div className="exercise-card-div">
                  <img src={bodydata.gifUrl} alt="img" />
                  <div className="exercise-card-div-button">
                    <h3>{bodydata.name}</h3>
                    <div>
                      <button>More</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultExercise;
