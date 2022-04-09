import {MoviesContext} from "../Context/MoviesContext"
import React ,  {useContext } from 'react';
import "./movies.css"
import Footer from "./footer";
import Buttons from "./butoons";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import SeriesList from './SeriesList';
const Series = ()=>{

  const value =useContext(MoviesContext)
  const useStyles = makeStyles((theme) => ({
   backdrop: {
     zIndex: theme.zIndex.drawer + 1,
     color: '#fff',
   },
 }));
 const classes = useStyles();

  
    return(
       <div className="movies-page">
         
          <section className="loading">
          {!value.loading ?"" :<Backdrop className={classes.backdrop} open>
  <CircularProgress color="inherit" />
</Backdrop>}   </section>
           <div className="list" >
              {value.series.map((movie )=>(
                  <SeriesList id = {movie.id} vote_count={movie.vote_count} vote = {movie.vote_average} name ={movie.name} key={movie.id} image ={movie.poster_path}/>
              ))}
                <Buttons/>
                <Footer/>
           </div>
         
       </div>
    )
}
export default Series;