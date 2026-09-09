// import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";

const MovieList = (props) => {
  const { movies } = useContext(MovieContext);

  const movieList = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  console.log("movie list", movieList);

  const { year } = props;
  const [search, setSearch] = useState("");
  console.log("about component");

  const containerWrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  //useMemo, useCallback

  const filteredMovies = useMemo(() => {
    console.log("filtering");
    return movies.filter((movie) =>
      movie?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, movies]);

  return (
    <>
      <div style={containerWrapper}>
        <h3>Filtered Result</h3>
        <br />
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie, id) => {
            return (
              <Movie
                key={id}
                mname={movie.name}
                year={movie.year}
                timeStamp={() => {}}
                myear={year}
                id={movie.id}
              />
            );
          })}
        <br />

        {filteredMovies.length == 0 && search.length > 0 && (
          <p>No Result Found</p>
        )}
        <br />
        <h3>Non-filtered Data</h3>
      </div>
    </>
  );
};

export default MovieList;

//props drilling

//parent -> child1 -> child2 -> child3 -> child4 (title)

//backgroundColor, backgroundSize, fontSize, textAlign
