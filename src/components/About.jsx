// import React from "react";
import Movie from "./Movie";

const About = ({ title, arr }) => {
  console.log(title);
  return (
    <>
      <h1>About</h1>
      <h4>{title}</h4>
      {arr.map((movie, index) => {
        return <Movie key={index} name={movie.name} />;
      })}
    </>
  );
};

export default About;
