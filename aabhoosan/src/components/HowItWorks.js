import React from "react";

// Importing icons for each step
import { FaUserPlus, FaBoxOpen, FaShoppingCart, FaTruck, FaMoneyCheckAlt } from "react-icons/fa";

// Steps data for How It Works section
const steps = [
    {
        id: 1,
        title: "Create Account",
        desc: "GSTIN / Enrolment ID\nBank Account", // Supports multi-line description
        icon: <FaUserPlus />,
    },
    {
        id: 2,
        title: "List Products",
        desc: "Add products in your supplier panel",
        icon: <FaBoxOpen />,
    },
    {
        id: 3,
        title: "Get Orders",
        desc: "Start receiving orders from customers",
        icon: <FaShoppingCart />,
    },
    {
        id: 4,
        title: "Affordable Shipping",
        desc: "Deliver across India at low cost",
        icon: <FaTruck />,
    },
    {
        id: 5,
        title: "Receive Payments",
        desc: "Get paid within 7 days",
        icon: <FaMoneyCheckAlt />,
    },
];

// HowItWorks Component
function HowItWorks() {
    return (
        // Section container with background gradient and font
        <section
            className="py-5"
            style={{
                background: "linear-gradient(135deg, #f8f9fa, #eef1f5)", // Light grey gradient
                fontFamily: "Poppins",
            }}
        >
            <div className="container text-center">
                {/* Section Heading */}
                <h2 className="fw-bold mb-3">How it works</h2>
                <p className="text-muted mb-5">
                    Start selling in just 5 simple steps
                </p>

                {/* Steps Row */}
                <div className="row justify-content-center position-relative">

                    {/* Map over steps array to create cards */}
                    {steps.map((step, index) => (
                        <div
                            className="col-md-2 col-sm-6 mb-4 position-relative"
                            key={step.id}
                        >
                            {/* Card Container */}
                            <div className="step-card p-4 h-100">

                                {/* Icon Circle */}
                                <div className="icon-circle mx-auto mb-3">
                                    {step.icon}
                                </div>

                                {/* Step Title */}
                                <h6 className="fw-semibold">{step.title}</h6>

                                {/* Step Description */}
                                <p className="text-muted small">
                                    {/* Split description by line breaks */}
                                    {step.desc.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                            </div>

                            {/* Connector Line (only for non-last steps on medium+ screens) */}
                            {index !== steps.length - 1 && (
                                <div className="connector-line d-none d-md-block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Export the component
export default HowItWorks;