import MovieDetail from "./MovieDetail";
import "./../App.css";
import styles from "./../App.module.css";

const Movie = ({ mname, timeStamp, year, id }) => {
  console.log("movie component");

  const cardWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    boxShadow: "0 0 5px #ccc",
    padding: "1rem", 
    borderRadius: '6px',
    minWidth: "200px"
  };

  const handleClick = (id) => {
    timeStamp(id);
  };

  return (
    <div style={cardWrapper}>
      <MovieDetail name={mname} year={year} />
      <button className="btn" onClick={()=>handleClick(id)}>Click</button>
      <button className={styles.btn} onClick={()=>handleClick(id)}>Click</button>
    </div>
  );
};

export default Movie;
