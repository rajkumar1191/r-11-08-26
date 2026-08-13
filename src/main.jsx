import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/*
  ES6:-
  variable -> var -> let & const
  functions -> function -> =>
  template literals -> hi + ' ' + variableName -> `hi ${variableName}`
  spread & rest
  destructing
  default parameters
  classes and inheritance
  import/export


  Arrow Functions:
    const Button = () =>{
      const handleClick = () => consol.log('clicked');

      return <button onClick={handleClick}>Click me</button>
      }


  Destructing:
    const obj = {
      id: 1234,
      name: 'Raj',
      loc: 'Chennai',
      mob: 9876543210
    }

    const arr = [
      {
      id: 1,
      name: 'Raj',
      loc: 'Chennai',
      mob: 9876543210
    }, 
    {
      id: 2,
      name: 'Raj',
      loc: 'Chennai',
      mob: 9876543210
    },
    {
      id: 3,
      name: 'Raj',
      loc: 'Chennai',
      mob: 9876543210
    }
    ]

    const { id, loc } = obj;

    console.log(id);
    console.log(loc);

    const [ a, b, c ] = arr;

    console.log(a)


    Template Literals:
      <div className={`alert alert-${type}`}>Notification</div>

    spread and rest operator:
      const obj2={
        ...obj,
        edu: 'ME',
        graduate: 'Yes'
      }

      console.log(obj2)

    const arr2 = [...arr, obj2]

    const sum = (a,b,c,d,e) => {
      return a+b+c+d+e
      } 

    const sum = (...nums) => {
      return nums
      }

      console.log(sum(1,2,3,4,5))
      console.log(sum(1,2,3))
      console.log(sum(1,2,3,4))
      console.log(sum(1,2))

    <input {...restOfProps} />


    map: transform every item using callback function and return a new array of the exact same length

    [1,2,3,4,5] => [3,4,5,6,7]

    const arr2 = [1,2,3,4,5];

    const arr3 = arr2.map((item)=> item + 2)

    filter:

    const arr4 = arr2.filter((item)=> item > 2) // [3,4,5]


    reduce:

    const movies = [
    {
      name: "ABC",
      ticketPrice: 120
    },
    {
      name: "ABCD",
      ticketPrice: 120
    },
    {
      name: "ABCDE",
      ticketPrice: 120
    },
  ];

  const totalBill = movies.reduce((total, movie) => total + movie.ticketPrice, 0);

  find:
  

*/
