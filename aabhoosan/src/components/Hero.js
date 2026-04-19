import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

// Hero Section Component
function Hero() {
    return (
        // Hero Section Container
        <section
            className="py-5 text-center  "
            style={{
                background: "linear-gradient(to right, #BD9734, #493D1C)", // Gold-to-brown gradient
                color: "white",
            }}
        >
            <div className="container p-3" style={{ fontFamily: "Poppins" }}>
                <div className="row align-items-center">

                    {/* Left Column: Text Content */}
                    <div className="col-md-6">
                        {/* Badge */}
                        <span className="badge bg-light text-dark mb-3 p-3 rounded-pill">
                            Trusted Jewellery Seller Platform
                        </span>

                        {/* Heading */}
                        <h1 className="fw-bold">
                            Sell Jewellery Online <br />
                            <span className=" " style={{ color: "#DBBA60" }}>with TheAabhoosan</span>
                        </h1>

                        {/* Description Paragraph */}
                        <p className="mt-3">
                            Reach thousands of jewellery buyers across India with zero hassle,
                            fast payments and full seller support.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="mt-4">
                            <button className="btn btn-light rounded-pill me-3 px-4">
                                Start Selling
                            </button>
                            <button className="btn btn-outline-light rounded-pill px-4">
                                Seller Login
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div className="col-md-6 text-center">
                        {/* Animated Image using Framer Motion */}
                        <motion.img
                            src="https://seller.theaabhooshan.com/assets/images/banner/seller_home.png"
                            className="img-fluid w-100 rounded-3"
                            style={{ maxHeight: "200px", objectFit: "contain" }}
                            initial={{ opacity: 0, x: 100 }}      // Initial position and opacity
                            animate={{ opacity: 1, x: 0 }}        // Animate to final position
                            transition={{ duration: 1 }}           // Animation duration 1s
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

// Export Hero Component
export default Hero;