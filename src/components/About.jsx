// import React from "react";
import Movie from "./Movie";

const About = ({ title, arr, passData, year }) => {
  return (
    <>
      <h1>About</h1>
      <h4>{title}</h4>
      {arr.map((movie, index) => {
        return <Movie key={index} mname={movie.name} timeStamp={passData} myear={year} />;
      })}
    </>
  );
};

export default About;


//props drilling

//parent -> child1 -> child2 -> child3 -> child4 (title)