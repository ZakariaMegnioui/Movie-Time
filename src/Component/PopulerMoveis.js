import {MoviesContext} from "../Context/MoviesContext"

import React ,  { useContext} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import "./movies.css"
import Movieslist from './MoviesList';
const PopulerMoviesList = ()=>{
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));
      const classes = useStyles();
    const value = useContext(MoviesContext);
    return(
       <div className="movies-page">
           <section className="loading">
          {!value.loading ?"" :<Backdrop className={classes.backdrop} open>
  <CircularProgress color="inherit" />
</Backdrop>}

        </section>
           <div className="list">
              {value.populer.map((movie )=>(
                 
                  <Movieslist id = {movie.id} vote_count={movie.vote_count} key={movie.id} vote = {movie.vote_average} name ={movie.original_title}  image ={movie.poster_path}/>
              ))}
          
           </div>
       </div>
    )
}
export default PopulerMoviesList;