import {MoviesContext} from "../Context/MoviesContext"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'
import React ,  {useContext } from 'react';
import Footer from "./footer";
import Buttons from "./butoons";
import "./movies.css"
import Movieslist from './MoviesList';
const Horror = ()=>{
   const useStyles = makeStyles((theme) => ({
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }));
    const classes = useStyles();

  const value =useContext(MoviesContext)
  

  
    return(
       <div className="movies-page">
          
          <section className="loading">
          {!value.loading ?"" :<Backdrop className={classes.backdrop} open>
  <CircularProgress color="inherit" />
</Backdrop>}
        
        
        </section>
           <div className="list" >
              {value.horrorMovies.map((movie )=>(
                  <Movieslist id = {movie.id} vote_count={movie.vote_count} vote = {movie.vote_average} name ={movie.original_title} key={movie.id} image ={movie.poster_path}/>
              ))}
               <Buttons/>
               <Footer/>
           </div>
          
       </div>
    )
}
export default Horror;