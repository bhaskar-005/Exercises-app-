import React from 'react';
import "../styleing/Sectioncard.css"
import Sectioncard from "./Sectioncard"

const Section = ({data,setbodypart}) => {
  console.log(data);
  return(
     <div>
      {data?.map((item, index) => ( 
        <Sectioncard classname="section" item={item} index={index} setbodypart={setbodypart} />
      ))}
      
     </div>
  );
}

export default Section;
