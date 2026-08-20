import "./../App.css";
const MovieDetail = ({ name, year }) => {
  return (
    <>
      <h5 className={name == "ABC" ? "warn" : "active"}>
        {name} - {year}
      </h5>
    </>
  );
};

export default MovieDetail;
