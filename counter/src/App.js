import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const increament = () => {
    if (number < 24) {
      setNumber(number + 1)
    } else {
      alert("not included more than 24")
    }
  }

  const decreament = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
    else {
      alert("not included negative number")
    }


  }

  return (

    <div className="App-header">
      <p >Counter:{number}</p>


      <button onClick={increament}> increament : {number} </button>

      <button onClick={decreament}> decreament : {number} </button>


    </div>
  );
}

export default App;