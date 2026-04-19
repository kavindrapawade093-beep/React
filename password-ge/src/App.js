import logo from './logo.svg';
import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";



function App() {

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div clasName="card shadow-lg p-4 login-card" style={{ width: "400px" }}>

        <h3 className="text-center mb-4">Login Page</h3>

        <div className="input-group mb-3">
          <input type="text" 
          className="form-control"
          value={password}
          
          
          /> 

        </div>
      </div>
    </div>
  );
}

export default App;
