import { useState } from "react";
import "./../App.css";
const AddMovie = ({ passData }) => {
  const [movieName, setMovieName] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setMovieName(e.target.value);
  };

  const handleSubmit = () => {
    passData({ name: movieName });
    setMovieName("");
  };

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
