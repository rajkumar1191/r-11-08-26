import MovieDetail from "./MovieDetail";
import "./../App.css";
import styles from "./../App.module.css";

const Movie = ({ mname, timeStamp, year }) => {
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

  const handleClick = () => {
    timeStamp(`${name} ${Date.now()}`);
  };

  return (
    <div style={cardWrapper}>
      <MovieDetail name={mname} year={year} />
      <button className="btn" onClick={handleClick}>Click</button>
      <button className={styles.btn} onClick={handleClick}>Click</button>
    </div>
  );
};

export default Movie;
