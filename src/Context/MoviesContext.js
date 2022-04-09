import React, { useState, createContext, useEffect } from "react";

export const MoviesContext = createContext();
export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [populer, setPopuler] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState(85271);
  const [serieId, setSerisId] = useState(85271);
  const [movie, setMovie] = useState({});
  const [tv, setTv] = useState({});
  const API_KEY = "fcb434c4f3e83ea87b025b953d5fb069";
  useEffect(() => {
    getPopulerMovies();
    getAllMovies();
    getMoviesById();
    getHorrorMovies();
  }, []);
  const getPopulerMovies = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=5`
    );
    const populerMoviesData = await respons.json();
    setPopuler(populerMoviesData.results);
  };
  const getHorrorMovies = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_genres=27&page=${currentPage}`
    );
    const horrorMoviesData = await respons.json();
    setHorrorMovies(horrorMoviesData.results);
  };

  const getSeries = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    const seriesMoviesData = await respons.json();
    setSeries(seriesMoviesData.results);
  };

  const getMoviesById = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    const movieData = await respons.json();
    setMovie(movieData);
  };

  const geTvById = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=${API_KEY}`
    );
    const tvData = await respons.json();
    setTv(tvData);
  };

  const handelSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }

    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData.results);
  };

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getAllMovies = async () => {
    setLoading(true);
    const respons = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    const moviesData = await respons.json();
    if (search.trim() === "") {
      setMovies(moviesData.results);
    }
  };

  useEffect(() => {
    getMoviesById();
  }, [movieId, movies]);

  useEffect(() => {
    geTvById();
  }, [serieId, series]);

  useEffect(() => {
    getAllMovies();
    getHorrorMovies();
    getSeries();
  }, [currentPage, search]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading, movies]);

  return (
    <MoviesContext.Provider
      value={{
        loading,
        serieId,
        setSerisId,
        tv,
        series,
        horrorMovies,
        getMoviesById,
        movie,
        setMovie,
        movieId,
        setMovieId,
        movies,
        handelSearch,
        setMovies,
        search,
        setSearch,
        handelSearch,
        currentPage,
        setCurrentPage,
        populer,
        newPage,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
