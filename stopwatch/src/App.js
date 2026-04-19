import React from "react";
import Stopwatch from "./components/Stopwatch";
import Clock from "./components/Clock";
import Todo from "./components/Todo";
import "./App.css";


function App() {
  return (
    <div className="container">
      <h1>React Mini Projects</h1>

      <Clock />
      <Stopwatch />
      <Todo />
    </div>
  );
}
export default App;