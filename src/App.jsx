import "./App.css";
import About from './components/About'

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

  const handleClick = () =>{
    console.log("Button clicked");
  }

  return <div>
    <h2>{title}</h2>
    <button onClick={handleClick}>Click</button>
    <About title="ABCD" arr={movies} />
  </div>;
};

export default App;
