import React, {
  useCallback,
  useState,
  useEffect,
  useContext,
  lazy,
  Suspense,
} from "react";
import "./App.css";
// import About from "./components/About";
import AddMovie from "./components/AddMovie";
// import AddMovieByReducer from "./components/AddMovieByReducer";

// import axios from "axios";
import { addMovie, getMovies } from "./services/movie.service";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MovieData from "./components/MovieData";
import MovieList from "./components/MovieList";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieContext from "./context/MovieContext";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import HooksGuide from "./components/HooksGuide";
import useMovies from "./hooks/useMovies";
import { fetchMovies } from "./redux/slices/movieSlice";
import { useDispatch } from "react-redux";

const AboutCom = lazy(() => import("./components/About"));
const AddMovieByReducerCom = lazy(
  () => import("./components/AddMovieByReducer"),
);

const App = () => {
  const api_url = import.meta.env.VITE_API_URL;
  let movies1 = [
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

  const [movieData, setMovieData] = useState(movies1);
  const [movieTitle, setMovieTitle] = useState("");
  const { loading, error } = useMovies();
  const year = 2026;
  const dispatch = useDispatch();

  console.log("loading....", loading);

  useEffect(() => {
    fetch(`${api_url}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const movies = data.map(({ id, title }) => ({
          id: id,
          name: title,
          year: 2025,
        }));

        setMovieData(movies);
      });
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetch(`${api_url}/posts`);
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
      <Suspense fallback={<h1>Loading components....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/hooks" element={<HooksGuide />} />
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
                <AddMovieByReducerCom passData={handleDataFromChild} />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/movie-data/:name/:year" element={<MovieData />} /> */}
          <Route
            path="/about"
            element={
              <RoleProtectedRoute role={"admin"}>
                <AboutCom
                  title={movieTitle ?? "ABCD"}
                  isActive={isActive}
                  arr={movieData}
                  passData={deleteMovie}
                  year={year}
                />
              </RoleProtectedRoute>
            }
          >
            <Route
              path="filtered-result"
              element={<MovieList loading={loading} error={error} />}
            />
            <Route
              path="filtered-result/movie-data/:name/:year"
              element={<MovieData />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(App);
