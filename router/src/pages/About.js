import React from "react";

function About() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="container p-4 bg-light rounded-3 shadow" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-3">About Us</h2>

                <p className="text-center">
                    This is a simple React application built to demonstrate routing,
                    reusable components, and Bootstrap styling.
                </p>

                <hr />

                <ul>
                    <li>Built with React</li>
                    <li>Uses React Router</li>
                    <li>Styled using Bootstrap</li>
                    <li>Beginner friendly project</li>
                </ul>

                <p className="text-center mt-3">
                    Thank you for visiting 🚀
                </p>
            </div>
        </div>
    );
}

export default About;