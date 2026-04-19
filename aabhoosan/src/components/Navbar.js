import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light px-5 py-4 shadow-sm diamond-bg   " style={{ fontFamily: " Poppins" }}>
            <div className="container-fluid  ">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://seller.theaabhooshan.com/assets/images/logo/logo.png"
                        alt="logo"
                        style={{ height: "45px" }}
                    />
                </Link>

                {/* Hamburger */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                    aria-controls="nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="nav">

                    {/* Links */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div>
                        <Link to="/login" className="btn btn-outline-warning rounded-pill me-2">Login</Link>
                        <Link to="/register" className="btn btn-warning text-white rounded-pill" style={{ backgroundColor: "#D7B569" }}>Start Selling</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;