// Import React and required hooks
import React, { useRef, useState, useEffect } from 'react';

// Import logo (not used here, but kept)
import logo from './logo.svg';

// Import custom CSS
import './App.css';

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.min.js";


// Main Password Generator Component
const PasswordGeneretor = () => {

  // -------- Personal Information States --------

  // Store user's name
  const [name, setName] = useState("");

  // Store user's date of birth
  const [dob, setDob] = useState("");

  // Store user's email
  const [email, setEmail] = useState("");

  // Store uploaded file
  const [file, setFile] = useState(null);


  // -------- Password Generator States --------

  // Password length (default: 8)
  const [length, setLength] = useState(8);

  // Allow numbers in password
  const [allowedNumber, setAllowedNumber] = useState(true);

  // Allow special characters in password
  const [allowedSpecialChar, setAllowedSpecialChar] = useState(false);

  // Store generated or manually typed password
  const [password, setPassword] = useState("");

  // Control password show / hide
  const [showPassword, setShowPassword] = useState(false);


  // Reference to password input (used for copy)
  const selectPass = useRef(null);


  // -------- Function to Generate Password --------
  function generatePassword() {

    // Initialize empty password
    let pass = "";

    // Base characters (uppercase + lowercase)
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Add numbers if checkbox is checked
    if (allowedNumber) str += "0123456789";

    // Add special characters if checkbox is checked
    if (allowedSpecialChar) str += "!@#$%&*";

    // Loop to generate password of selected length
    for (let i = 1; i <= length; i++) {

      // Generate random index
      let char = Math.floor(Math.random() * str.length + 1);

      // Add random character to password
      pass += str.charAt(char);
    }

    // Save generated password to state
    setPassword(pass);
  }


  // -------- Function to Copy Password --------
  const copyPassword = () => {

    // Select the password text
    selectPass.current.select();

    // Copy password to clipboard
    navigator.clipboard.writeText(password);
  };


  // -------- Auto Generate Password on Change --------
  useEffect(() => {

    // Regenerate password when length or options change
    generatePassword();

  }, [length, allowedNumber, allowedSpecialChar]);


  // -------- UI Rendering --------
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">

      {/* Card Container */}
      <div
        className="card shadow-lg p-4 password-card bg-info"
        style={{ width: "400px" }}
      >

        {/* Card Heading */}
        <h3 className="text-center mb-4">
          Personal info
        </h3>


        {/* -------- Name Input -------- */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Fullname"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name
          />
        </div>


        {/* -------- Date of Birth Input -------- */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)} // Update DOB
          />
        </div>


        {/* -------- Email Input -------- */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="@gmail.com"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email
          />
        </div>


        {/* -------- File Upload -------- */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Upload File
          </label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])} // Store uploaded file
          />
        </div>


        {/* -------- Password Input + Buttons -------- */}
        <div className="input-group mb-3">

          {/* Password Input Field */}
          <input
            type={showPassword ? "text" : "password"} // Toggle show/hide
            className="form-control"
            ref={selectPass} // Reference for copy
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Manual typing allowed
            placeholder="Type or generate password"
          />

          {/* Show / Hide Password Button */}
          <button
            className="btn btn-outline-secondary bg-primary"
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            👀
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
          </button>

          {/* Copy Password Button */}
          <button
            className="btn btn-primary"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            className="form-range"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        {/* -------- Include Numbers Checkbox -------- */}
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={allowedNumber}
            onChange={() => setAllowedNumber(!allowedNumber)} // Toggle numbers
          />
          <label className="form-check-lable">
            Include Numbers
          </label>
        </div>


        {/* -------- Include Special Characters Checkbox -------- */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked={allowedSpecialChar}
            onChange={() => setAllowedSpecialChar(!allowedSpecialChar)} // Toggle special chars
          />
          <label className="form-check-lable">
            Include Special Characters
          </label>
        </div>


        {/* -------- Generate Password Button -------- */}
        <button
          onClick={generatePassword}
          className="btn btn-primary w-100"
        >
          Generate Password
        </button>

      </div>

    </div>
  );
}

// Export component
export default PasswordGeneretor;



