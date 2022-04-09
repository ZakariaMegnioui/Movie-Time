import {MoviesContext} from "../Context/MoviesContext"
import React ,  {useContext } from 'react';
import "./movies.css"
const Buttons = ()=>{
 
    const value =useContext(MoviesContext)
  
    return(
       <div className="buttons">
       
               <button className="bt"
         style={{
            cursor: value.currentPage !== 1 ? "pointer" : "not-allowed" ,
            background: value.currentPage !== 1 ? " " : " #000000",
         }}
                  onClick={() => value.newPage("previous")}
                  >Prevouis Page</button>
               <button
              className="bt"
               onClick={() =>  value.newPage("next")}
               >Next Page</button>
         
       </div>
    )
}
export default Buttons;