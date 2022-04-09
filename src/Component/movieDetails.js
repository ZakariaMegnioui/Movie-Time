import React, {useContext , useEffect} from 'react';
import {MoviesContext} from "../Context/MoviesContext"
import "./movieDetails.css"
import Footer from "./footer";
const Movie = ({match})=>{
    const value =useContext(MoviesContext)
  
    
    
    useEffect(() =>{
    
       value.setMovieId(match.params.id)
      
          },[])
    return(
    <div>
      <div className="content">

      </div>
      <section className="more">
          <h1>{value.movie.original_title}</h1>
          <p>{value.movie.release_date}</p>
          <p>{value.movie.original_language}</p>
          <p>{value.movie.overview}</p>
      </section>
      <div className="movie">
        <img className="backdrop" src={`https://image.tmdb.org/t/p/w400/${value.movie.poster_path}`}  alt=""/>
      </div>
      <div className="btns">
          <button className="b">Watch Now</button>
          <button>Trailer</button>
          
      </div>
     
      </div>
    )
}
export default Movie;