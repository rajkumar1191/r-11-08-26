import { useState } from "react";
import "./App.css";
import About from "./components/About";
import AddMovie from "./components/AddMovie";

const App = () => {
  let movies = [
    {
      name: "ABC",
    },
    {
      name: "ABCD",
    },
    {
      name: "ABCDE",
    },
  ];

  const [movieData, setMovieData] = useState(movies);

  const title = "React Tutorial";
  const year = 2026;

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleDataFromChild = (data) => {
    setMovieData((movieslist) => [...movieslist, data]);
    console.log(movieData);
  };

  const isActive = false;

  return (
    <div>
      <h2 className="title">{title}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
      <AddMovie passData={handleDataFromChild} />
      <About
        title="ABCD"
        isActive={isActive}
        arr={movieData}
        passData={handleDataFromChild}
        year={year}
      />
    </div>
  );
};

export default App;
