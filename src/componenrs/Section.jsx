import React, { useContext } from 'react';
import "../styleing/Sectioncard.css"
import Sectioncard from "./Sectioncard"
import Loading from './Loading';
const Section = ({ data, setbodypart ,load}) => {

  return (
    <div className='section-div'>
      {load ? (
        <Loading />
      ) : (
        data?.map((item, index) => (
          <Sectioncard classname="section" item={item} index={index} setbodypart={setbodypart} />
        ))
      )}
    </div>
  );
}

export default Section;
