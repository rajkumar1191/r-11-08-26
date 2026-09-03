import MovieDetail from "./MovieDetail";
import "./../App.css";
// import styles from "./../App.module.css";
import { Link } from "react-router-dom";

const Movie = ({ mname, timeStamp, year, id }) => {
  // console.log("movie component");

  const cardWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    boxShadow: "0 0 5px #ccc",
    padding: "1rem",
    borderRadius: "6px",
    minWidth: "200px",
  };

  const handleClick = (id) => {
    timeStamp(id);
  };

  return (
    <div style={cardWrapper}>
      <MovieDetail name={mname} year={year} />
      <button className="btn" onClick={() => handleClick(id)}>
        Click
      </button>
      <Link to={`/about/filtered-result/movie-data/${mname}/${year}`}>View Detail</Link>
    </div>
  );
};

export default Movie;
