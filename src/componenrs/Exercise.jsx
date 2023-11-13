import React, { useState,useEffect } from 'react';
import FatchData from '../utils/FatchData';
import Section from "./Section"
import ResultExercise from "./ResultExercise"
import '../styleing/exercise.css'
const Exercise = () => {
  const[search ,setsearch] = useState('');
  // for category section
  const [bodypart , setbodypart] = useState([]);
  const [section, setsection] = useState([]);
  const [load, setload] = useState(false);

  //for input 
  const textInput = (event)=>{
   setsearch( event.target.value.toLowerCase());
   console.log(search);
  }
 const clickHandler = ()=>{
  if (search) {
     setload(true);
  FatchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`)
  .then((data)=>setbodypart(data));
  setload(false);
  console.log(bodypart);
  }
  else{
    return
  }
 
 }



  //catagory section inside useeffect so that it can rander on web load
  useEffect(() => {
    setload(true);
    FatchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList")
    .then((data)=>{setsection(data); 
      setload(false);
      console.log(section);
    })
  },[]);
 

  return (
    <>
    <div className='main-home-exercise-div'>
    <h1 className='h1-main'>Awesome Exercises You</h1> 
    <h1 className='h1-highlite'>Should Know</h1>
    <div >
      <input className='input-box' onChange={textInput} type="text" placeholder='Exercises or body part' />
    <button onClick={clickHandler} className='input-button'>find</button>
    </div></div>
    <Section data={section} setbodypart={setbodypart} load={load}/>
    
    {bodypart && bodypart.length>0 ?(
      <ResultExercise bodypart={bodypart} load={load} />
    ) : (
      <div>no data found for "{search}"</div>
    )}
    </>
  );
  }

export default Exercise;
