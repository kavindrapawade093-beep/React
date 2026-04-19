import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("sellerUser"));

        if (!savedUser) {
            alert("No registered user found. Please register first!");
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login Successful ✅");

            // 🔹 Redirect to Dashboard
            navigate("/dashboard");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div className="container mt-5" style={{ fontFamily: "Poppins" }}>
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="btn btn-warning w-100" style={{ backgroundColor: "#D7B569" }}>Login</button>
                </form>

                <div className="text-center mt-3">
                    <small>
                        Don't have an account? <Link to="/register">Register</Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;