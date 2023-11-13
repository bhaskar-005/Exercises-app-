import React from 'react';
import { NavLink } from 'react-router-dom';

const Smallscreen = () => {
  return (
    <div className='small-nav'>
     <ul className='ul-tag'>
     <NavLink  className="Navlink" to ={"/"}><li>Home</li></NavLink> 
     <NavLink className="Navlink"  to={'/about'}><li>About</li></NavLink>
     <NavLink className="Navlink"  to={'https://github.com/bhasker440'} target='_blank'><li>code</li></NavLink> 
     </ul>
    </div>
  );
}

export default Smallscreen;
