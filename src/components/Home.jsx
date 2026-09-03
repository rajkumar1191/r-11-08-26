const Home = () => {
  const title = "React Tutorial";

  const handleClick = () => {
    console.log("Button clicked");
    localStorage.setItem("token1", "fasdfsdgfsdfg");
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </>
  );
};


export default Home;