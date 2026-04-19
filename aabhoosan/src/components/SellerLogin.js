import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// SellerLogin Component
const SellerLogin = () => {

    // ✅ State for form inputs and messages
    const [email, setEmail] = useState('');       // Stores email input
    const [password, setPassword] = useState(''); // Stores password input
    const [success, setSuccess] = useState(false); // Tracks login success
    const [error, setError] = useState('');       // Stores error message

    // ✅ Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("sellerUser"));

        if (storedUser) {
            // Check if entered email & password match stored data
            if (email === storedUser.email && password === storedUser.password) {
                setSuccess(true);  // Show success message
                setError('');      // Clear any error
            } else {
                setError("Invalid email or password ❌"); // Invalid credentials
                setSuccess(false);
            }
        } else {
            setError("No user found. Please register first."); // No user exists
        }
    };

    return (
        // Main Card Container
        <div className="card shadow-sm p-4 rounded-4 border-0 mx-auto" style={{ maxWidth: '400px' }}>

            {/* Heading */}
            <h3 className="text-navy fw-bold mb-4 text-center">Seller Login</h3>

            {/* ✅ SUCCESS MESSAGE */}
            {success && (
                <div className="alert alert-success text-center">
                    ✅ Login Successful!
                </div>
            )}

            {/* ❌ ERROR MESSAGE */}
            {error && (
                <div className="alert alert-danger text-center">
                    {error}
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>

                {/* Email Input */}
                <div className="mb-3">
                    <label className="form-label small fw-bold">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@jeweller.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="mb-2">
                    <label className="form-label small fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="mb-3 text-end">
                    <Link to="/forgot-password" className="small text-decoration-none">
                        Forgot Password?
                    </Link>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold py-2"
                    style={{ backgroundColor: '#1a2b4b', border: 'none' }}
                >
                    Login
                </button>
            </form>

            {/* Registration Link */}
            <div className="text-center mt-3">
                <small className="text-muted">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-gold fw-bold">
                        Apply as Seller
                    </Link>
                </small>
            </div>
        </div>
    );
};

// Export SellerLogin component
export default SellerLogin;