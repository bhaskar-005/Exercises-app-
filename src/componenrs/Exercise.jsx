import React, { useState,useEffect } from 'react';
import FatchData from '../utils/FatchData';
import Section from "./Section"
import ResultExercise from "./ResultExercise"

const Exercise = () => {
  const[search ,setsearch] = useState('');
  // for category section
  const [bodypart , setbodypart] = useState([]);
  const [section, setsection] = useState([]);


  //for input 
  const textInput = (event)=>{
   setsearch( event.target.value.toLowerCase());
   console.log(search);
  }
 const clickHandler = ()=>{
  FatchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`)
  .then((data)=>setbodypart(data));
  console.log(bodypart);
 }



  //catagory section inside useeffect so that it can rander on web load
  useEffect(() => {
    FatchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList")
    .then((data)=>{setsection(data); 
      console.log(section);
    })
  },[]);
 

  return (
    <>
    <div>
    <h1>Awesome Exercises You <br /> Should Know</h1>
    <input onChange={textInput} type="text" placeholder='Exercises or body part' />
    <button onClick={clickHandler}>find</button>
    </div>
    <Section data={section} setbodypart={setbodypart}/>

     <ResultExercise bodypart={bodypart}/>
    </>
  );
  }

export default Exercise;
