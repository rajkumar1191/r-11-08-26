import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = (props) => {
  const { title, isActive } = props;
  const [search, setSearch] = useState("");
  console.log("about component");

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

      <div style={{ display: "flex" }}>
        <div>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to='/about/filtered-result'>List Movies</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <h4>{title}</h4>
    </>
  );
};

export default About;

//props drilling

//parent -> child1 -> child2 -> child3 -> child4 (title)

//backgroundColor, backgroundSize, fontSize, textAlign
