import React ,{useContext , useState} from 'react';
import {MoviesContext} from "../Context/MoviesContext"

import { IoReorderFourOutline } from 'react-icons/io5';
import "./nav.css";
const Nav = () =>{
 
  const [showLinks , setShowLinks] = useState(false);
    const value =useContext(MoviesContext);
   
    return(
        <div className="nav-bar">
           <h1 className="logo"><a className="logo-link" href="/">Movies Time</a> </h1>
           <ul className="nav-links" id={showLinks ? "hidden" : ""}>
             
             <li className="links"><a href="/"> MOVIES</a></li> 
             <li  className="links"><a href="/popular">POPULAR</a></li>
             <li  className="links"><a href="/horror">HORROR</a></li>
             <li  className="links"><a href="/series">SERIES</a></li>
               <form onSubmit={value.handelSearch }>
            <input   value={value.search} onChange={(e) => value.setSearch(e.target.value)}  type="text" placeholder="Search for movies..." name="search"/>
           
          </form>
        
           </ul>
          <button onClick={()=> setShowLinks(!showLinks)} className="burger"> <IoReorderFourOutline color="white"  size=" 24px" /></button>
        </div>
          
        
    )
}
export default Nav ;