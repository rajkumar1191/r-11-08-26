import "./App.css";
import About from "./components/About";

const App = () => {
  const movies = [
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

  const title = "React Tutorial";
  const year = 2026;

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleDataFromChild = (data) => {
    console.log(data);
  };

  handleDataFromChild("afdsfs");

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>Click</button>
      <About
        title="ABCD"
        arr={movies}
        passData={handleDataFromChild}
        year={year}
      />
    </div>
  );
};

export default App;
