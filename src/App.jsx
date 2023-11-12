import { useState } from 'react'
import Navbar from './componenrs/Navbar'
import { Route,Routes } from 'react-router-dom';
import Home from './componenrs/Home';
import Exercise from './componenrs/Exercisedetail';
import About from './componenrs/About';
import NoPage from './componenrs/NoPage';
import Footer from './componenrs/Footer';

function App() {
 
  return (
 
      <>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path='/exercise/:id' element={<Exercise/>} />
        <Route path="*" element={ <NoPage/>} />
       </Routes>
       <Footer/>

       
      </>
      
  )
}

export default App
