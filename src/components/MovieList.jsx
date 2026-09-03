// import React from "react";
import { useMemo, useState } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  const { arr, year } = props;
  const [search, setSearch] = useState("");
  console.log("about component");

  const containerWrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  //useMemo, useCallback

  const filteredMovies = useMemo(() => {
    console.log("filtering");
    return arr.filter((movie) =>
      movie?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, arr]);

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
