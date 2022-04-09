import React from 'react';
import { FaStar } from  "react-icons/fa";
import {AiFillEye} from "react-icons/ai";
import {BiPlayCircle} from "react-icons/bi";

import  './moviesList.css';
const MoviesList = ({image ,id, name , vote , vote_count })=>{
 
    return(
      <div  className="movies-list" >
      
      <a className="oncklic" href={`/movie/${id}`} ></a>
         <img  src={`https://image.tmdb.org/t/p/w400/${image}`} alt="poster"/>
         <div className="vote">
          <FaStar key={vote}/>
          <p  href="/">{vote}</p>
        </div>
        <div className="vote_count">
          <AiFillEye/>
          <p>{vote_count}</p>
        </div>
        
         <div className="details">
           < BiPlayCircle className="play"/>
         <h3  className="name">  {name}</h3>
        
         </div>
        
         </div>
     
    )
}
export default MoviesList;