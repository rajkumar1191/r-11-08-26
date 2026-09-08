import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [movies, setMovie] = useState([
    {
      id: 1,
      name: "ABC",
      year: 2024,
    },
    {
      id: 2,
      name: "ABCD",
      year: 2025,
    },
    {
      id: 3,
      name: "ABCDE",
      year: 2026,
    },
  ]);

  const addMovie = (movie) => {
    setMovie((movieslist) => [...movieslist, movie]);
  };

  const deleteMovie = (id) =>{
    setMovie((prev) => prev.filter((movie) => movie.id != id));
  }

  return(
    <MovieContext.Provider value={{movies, addMovie, deleteMovie}}>
        {children}
    </MovieContext.Provider>
  )
};

export default MovieProvider;