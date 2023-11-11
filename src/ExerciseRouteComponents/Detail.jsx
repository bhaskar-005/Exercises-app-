import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FatchData from "../utils/FatchData";

const Detail = () => {
  let { id } = useParams();
  console.log(id);

  const [bodydata, setbodydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FatchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
        );
        setbodydata(data); // Now, 'data' is the resolved data, not the promise
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(bodydata); 

  return (
    <div>
    
        <div key={bodydata.id}>
          <img src={bodydata.gifUrl} alt="" />
          <h2>{bodydata.name}</h2>
          <p>{bodydata.instructions}</p>
          <h2>{bodydata.secondaryMuscles }</h2>
        </div>
    
    </div>
  );
};

export default Detail;
