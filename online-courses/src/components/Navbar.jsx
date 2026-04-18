import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("student");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <h2 className="logo">EduCourses</h2>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Courses</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          {/* Profile Dropdown */}
          <div
            className="profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://via.placeholder.com/35"
              alt="profile"
              className="avatar"
            />

            {dropdownOpen && (
              <div className="dropdown">
                <p>My Account</p>
                <p>Settings</p>
                <p onClick={logout}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;