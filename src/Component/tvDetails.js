import React, {useContext , useEffect} from 'react';
import {MoviesContext} from "../Context/MoviesContext"
import "./movieDetails.css"
const Tv = ({match})=>{
    const value =useContext(MoviesContext)
  
    
    
    useEffect(() =>{
    
       value.setSerisId(match.params.id)
      
          },[])
    return(
    <div>
      <div className="content">

      </div>
      <section className="more">
          <h1>{value.tv.name}</h1>
          <p>{value.tv.last_air_date}</p>
          
          <p>{value.tv.original_language}</p>
          <p>{value.tv.overview}</p>
      </section>
      <div className="movie">
        <img className="backdrop" src={`https://image.tmdb.org/t/p/w400/${value.tv.poster_path}`}  alt=""/>
      </div>
      <div className="btns">
          <button className="b">Watch Now</button>
          <button>Trailer</button>
      </div>
      </div>
    )
}
export default Tv;