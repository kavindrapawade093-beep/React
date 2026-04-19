// Import React library (required to create React components)
import React from "react";

// Import Calculator component from components folder
import Calculator from "./components/Calculator";

// Import CSS file for styling the application
import "./App.css";

// Create the main App component
function App() {

  // JSX returned by the App component
  return (

    // Main container for the application
    <div className="app">

      {/* Render the Calculator component inside App */}
      <Calculator />

    </div>

  );
}

// Export App component so it can be used in index.js
export default App;