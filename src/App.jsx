import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import AddMovie from "./components/AddMovie";
import AddMovieByReducer from "./components/AddMovieByReducer";

// import axios from "axios";
import { addMovie, getMovies } from "./services/movie.service";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MovieData from "./components/MovieData";
import MovieList from "./components/MovieList";
import ProtectedRoute from "./components/ProtectedRoute";

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

  const year = 2026;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const movies = data.map(({ id, title }) => ({
          id: id,
          name: title,
          year: 2025,
        }));

        setMovieData(movies);
      });
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      const movies = data.map(({ id, title }) => ({
        id: id,
        name: title,
        year: 2025,
      }));
      console.log(movies);
      setMovieData(movies);
    };
    loadMovies();
  }, []);

  // useEffect(() => {
  //   const loadMovies = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users",
  //     );

  //     const movies = response.data.map(({ id, name }) => ({
  //       id: id,
  //       name: name,
  //       year: 2025,
  //     }));
  //     console.log(movies);
  //     setMovieData(movies);
  //   };
  //   loadMovies();
  // }, []);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await getMovies();
        const movies = response.data.map(({ id, name }) => ({
          id: id,
          name: name,
          year: 2025,
        }));
        console.log(movies);
        setMovieData(movies);
      } catch (error) {
        console.log(error);
      }
    };
    loadMovies();
  }, []);

  const addMovies = async (movie) => {
    try {
      const response = await addMovie(movie);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDataFromChild = (data) => {
    setMovieData((movieslist) => [...movieslist, data]);
    addMovies(data);
    console.log(movieData);
  };

  const deleteMovie = useCallback((id) => {
    setMovieData((prev) => prev.filter((movie) => movie.id != id));
  }, []);

  const isActive = false;

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-movie"
          element={<AddMovie passData={handleDataFromChild} />}
        />
        <Route
          path="/add-movie/:id/:name/:title"
          element={
            <ProtectedRoute>
              <AddMovie passData={handleDataFromChild} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-movie-by-reducer"
          element={
            <ProtectedRoute>
              <AddMovieByReducer passData={handleDataFromChild} />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/movie-data/:name/:year" element={<MovieData />} /> */}
        <Route
          path="/about"
          element={
            <About
              title={movieTitle ?? "ABCD"}
              isActive={isActive}
              arr={movieData}
              passData={deleteMovie}
              year={year}
            />
          }
        >
          <Route
            path="filtered-result"
            element={<MovieList arr={movieData} />}
          />
          <Route
            path="filtered-result/movie-data/:name/:year"
            element={<MovieData />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default React.memo(App);
