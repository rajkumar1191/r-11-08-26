import { useEffect, useState } from "react";
import "./../App.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
const AddMovie = ({ passData }) => {
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const { name } = useParams();
  const [query, setQuery] = useSearchParams();



  console.log("Params", name);
  console.log("SearchParams", query.get("name"));
  console.log("SearchParams", query.get("loc"));
  console.log("SearchParams", query.get("year"));

  console.log("add movie component");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setMovieName(e.target.value);
  };

  const handleSubmit = () => {
    passData({ name: movieName });
    setMovieName("");
    navigate("/");
  };

  useEffect(() => {
    console.log("Inside useEffect");
  }, [movieName]);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect -> unconditionally, conditional (initial & dependent)

  /*

  useEffect(()=>{})

  */

  return (
    <div>
      {/* <input
        value={movieName}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Movie Name"
      /> */}

      <input
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        type="text"
        placeholder="Enter Movie Name"
      />

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddMovie;
