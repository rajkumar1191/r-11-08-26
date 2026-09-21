const Home = () => {
  const title = import.meta.env.VITE_APP_NAME;

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