import { Link, NavLink } from "react-router-dom";

const Nav = () => {
 
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <NavLink to="/add-movie">Add Movie</NavLink>
      <NavLink to="/add-movie/abcdef/1234/raj">Add Movie</NavLink>
      <Link to="/add-movie-by-reducer">Add Movie by Reducer</Link>
    </>
  );
};


export default Nav;