import React, { useCallback, useState } from "react";
import "./App.css";
import About from "./components/About";
import AddMovie from "./components/AddMovie";
import AddMovieByReducer from "./components/AddMovieByReducer";

const App = () => {
  let movies = [
    {
      id: 1,
      name: "ABC",
      year: 2026,
    },
    {
      id: 2,
      name: "ABCD",
      year: 2026,
    },
    {
      id: 3,
      name: "ABCDE",
      year: 2026,
    },
  ];

  const [movieData, setMovieData] = useState(movies);
  const [movieTitle, setMovieTitle] = useState("");

  const title = "React Tutorial";
  const year = 2026;

  const handleClick = () => {
    setMovieTitle("");
    console.log("Button clicked");
  };

  const handleDataFromChild = (data) => {
    setMovieData((movieslist) => [...movieslist, data]);
    console.log(movieData);
  };

  const deleteMovie = useCallback((id) => {
    setMovieData((prev) => prev.filter((movie) => movie.id != id));
  }, []);

  const isActive = false;

  return (
    <div>
      <h2 className="title">{title}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
      <AddMovie passData={handleDataFromChild} />
      <AddMovieByReducer passData={handleDataFromChild} />
      <About
        title={movieTitle ?? "ABCD"}
        isActive={isActive}
        arr={movieData}
        passData={deleteMovie}
        year={year}
      />
    </div>
  );
};

export default React.memo(App);
