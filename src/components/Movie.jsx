import MovieDetail from "./MovieDetail";
const Movie = ({ mname, timeStamp, myear }) => {
  const handleClick = () => {
    timeStamp(`${name} ${Date.now()}`);
  };

  return (
    <>
      <MovieDetail name={mname} year={myear} />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Movie;
