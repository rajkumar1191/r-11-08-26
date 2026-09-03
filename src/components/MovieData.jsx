import { Link, useParams } from "react-router-dom";
import "./../App.css";
const MovieData = () => {
  const { name, year } = useParams();

  return (
    <>
      <Link to="/about/filtered-result">Back</Link>
      <h5>Movie Data</h5>
      <h5 className={name == "ABC" ? "warn" : "active"}>
        {name} - {year}
      </h5>
    </>
  );
};

export default MovieData;
