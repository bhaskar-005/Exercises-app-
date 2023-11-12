import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FatchData from "../utils/FatchData";
import Loading from "../componenrs/Loading2";
import "./detail.css";

const Detail = () => {
  let { id } = useParams();
  console.log(id);
  const [loading,setloading] = useState(false);
  const [bodydata, setbodydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = await FatchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
        );
        setbodydata(data); // Now, 'data' is the resolved data, not the promise
        setloading(false);
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
    <div className="div-main-detail-top" >
    
       {
        loading ?(
          <Loading/>
        ):(
          <div key={bodydata.id}className="div-main-detail">
          <img src={bodydata.gifUrl} className="detail-img"/>
         <div className="div-text-detail">
          <h1 className="detail-header">{bodydata.name}</h1>
          <p className="deteil-pera">{bodydata.instructions}</p>
          <br />
          <h3 ><span className="spantag-detail">Exercise targets : </span>{bodydata.target}</h3>
          <h3><span className="spantag-detail">Equipment :</span> {bodydata.equipment }</h3>
        </div></div>
        )
       }
    
    </div>
  );
};

export default Detail;
