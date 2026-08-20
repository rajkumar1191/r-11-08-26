// import React from "react";
import Movie from "./Movie";

const About = ({ title, arr, passData, year, isActive }) => {
  const containerWrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: isActive ? "lightgreen" : "lightblue",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        About
      </h1>
      <h4>{title}</h4>
      <div style={containerWrapper}>
        {arr.map((movie, index) => {
          return (
            <Movie
              key={index}
              mname={movie.name}
              timeStamp={passData}
              myear={year}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;

//props drilling

//parent -> child1 -> child2 -> child3 -> child4 (title)

//backgroundColor, backgroundSize, fontSize, textAlign
