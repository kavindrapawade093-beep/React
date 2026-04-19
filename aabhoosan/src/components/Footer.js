import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Footer Component
function Footer() {
    return (
        // Footer container
        <footer className="bg-light pt-5 pb-3" style={{ fontFamily: "Poppins" }}>
            <div className="container">
                <div className="row">

                    {/* Logo + About + Newsletter */}
                    <div className="col-md-4 mb-4">
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            <img
                                src="https://seller.theaabhooshan.com/assets/images/logo/logo.png"
                                alt="logo"
                                style={{ height: "45px" }}
                            />
                        </a>

                        {/* About Text */}
                        <p className="text-muted mt-3">
                            We are a team of designers and developers that create high quality
                            wordpress, shopify, Opencart
                        </p>

                        {/* Newsletter Signup Heading */}
                        <h6 className="mt-4" style={{ color: "#c8a44d" }}>
                            Signup for newsletter
                        </h6>

                        {/* Newsletter Input & Button */}
                        <div className="d-flex mt-2">
                            <input
                                type="email"
                                className="form-control border-0 border-bottom"
                                placeholder="Enter your email address"
                            />
                            <button
                                className="btn ms-2 text-white"
                                style={{ backgroundColor: "#c8a44d" }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-3 mb-4">
                        <h5 style={{ color: "#c8a44d" }}>Contact Us</h5>
                        <p className="text-muted mt-3 mb-1">📍 4710-4890 Breckinridge USA</p>
                        <p className="text-muted mb-1">✉ demo@yourdomain.com</p>
                        <p className="text-muted">📞 (012) 800 456 789-987</p>
                    </div>

                    {/* Information Links */}
                    <div className="col-md-3 mb-4">
                        <h5 style={{ color: "#c8a44d" }}>Information</h5>
                        <ul className="list-unstyled mt-3">
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Delivery Information</li>
                            <li className="mb-2">Privacy Policy</li>
                            <li className="mb-2">Terms & Conditions</li>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">Site Map</li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="col-md-2 mb-4">
                        <h5 style={{ color: "#c8a44d" }}>Follow Us</h5>
                        <div className="d-flex gap-3 mt-3">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaYoutube />
                        </div>
                    </div>

                </div>

                {/* Footer Bottom Text */}
                <div className="text-center mt-4 border-top pt-3">
                    <p className="mb-0 text-muted">
                        © 2026 The Aabhooshan. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Export Footer component
export default Footer;