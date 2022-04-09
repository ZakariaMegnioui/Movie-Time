import Nav from "./Component/navBar";
import PopulerMovies from "./Component/PopulerMoveis";
import AllMovies from "./Component/AllMovies";
import MovieDetails from "./Component/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HorrorMovies from "./Component/scarry";
import Series from "./Component/series";
import TvDetails from "./Component/tvDetails";
import { MoviesProvider } from "./Context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Switch>
          <div className="App">
            <Nav />

            <Route path="/" exact component={AllMovies} />
            <Route path="/popular" component={PopulerMovies} />
            <Route path="/horror" component={HorrorMovies} />
            <Route path="/series" component={Series} />
            <Route path="/tv/:id" component={TvDetails} />
            <Route path="/movie/:id" component={MovieDetails} />
          </div>
        </Switch>
      </Router>
    </MoviesProvider>
  );
}

export default App;
