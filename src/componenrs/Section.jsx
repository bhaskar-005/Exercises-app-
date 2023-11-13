import React, { useContext } from 'react';
import "../styleing/Sectioncard.css"
import Sectioncard from "./Sectioncard"
import Loading from './Loading';

const Section = ({ data, setbodypart, load }) => {
  return (
    <div className='section-div'>
      {load ? (
        <Loading />
      ) : (
        data && data.length > 0 ? (
          <div className="scroll-container">
          {data.map((item, index) => (
            <Sectioncard key={index} classname="section" item={item} setbodypart={setbodypart} />
          ))}
        </div>
        ) : (
          <div className="section-div">
            <h1 className="section-title">No more API requests, please try again</h1>
          </div>
        )
      )}
    </div>
  );
}

export default Section;
