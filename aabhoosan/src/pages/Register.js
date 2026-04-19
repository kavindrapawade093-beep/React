// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
        captchaInput: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState(generateCaptcha());

    function generateCaptcha() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (form.captchaInput !== captcha) {
            alert("Invalid Captcha!");
            setCaptcha(generateCaptcha());
            return;
        }

        const userData = {
            name: form.name,
            email: form.email,
            password: form.password,
            contact: form.contact
        };

        localStorage.setItem("sellerUser", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");

        alert("Registration Successful ✅");
        navigate("/dashboard");
    };

    return (
        <div className="container mt-5" style={{ fontFamily: "Poppins" }}>
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Register</h3>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    {/* Contact */}
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Contact Number"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    {/* Password */}
                    <div className="input-group mb-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    {/* Captcha */}
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <strong style={{ fontSize: "18px", letterSpacing: "3px" }}>{captcha}</strong>
                        <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => setCaptcha(generateCaptcha())}
                        >
                            Refresh
                        </button>
                    </div>

                    <input
                        type="text"
                        name="captchaInput"
                        placeholder="Enter Captcha"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    {/* Submit Button */}
                    <button className="btn btn-warning w-100 text-white" style={{ backgroundColor: "#D7B569" }}>Register</button>
                </form>

                <div className="text-center mt-3">
                    <small>
                        Already have an account? <Link to="/login" className="fw-bold">Login</Link>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Register;