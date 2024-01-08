import { useState } from 'react';
import './App.css'


function App() {

  // let counter = 5


  let [value, setCounter] = useState(5)

  const incrementValue = () => {
   // console.log("clicked", counter);
   // counter = counter + 1
  // setCounter(counter + 1)
  if (value < 10) {
    setCounter(value + 1)
  } else {
    // Prevent value from going above 10
    setCounter(10)
    alert("value can't be above 10")
  }
   
  }
  
const decrementValue = () => {
  // counter = counter - 1
  // setCounter(counter - 1)
  if (value > 0) {
    setCounter(value - 1);
  } else {
    // Prevent value from going negative
    setCounter(0)
    alert("Value can't be negative");
  }
}

  return (
    <>
    <h1>Chai aur React with the Mariner Ali</h1>

    <h2>counter: {value} </h2>

    <button onClick={incrementValue}>add value 
    </button>
    <br />
    <button onClick={decrementValue}>remove value 
    </button>
    <br />

    <p>score: {value}</p>
    </>
  )
  
  }
export default App
