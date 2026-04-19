import React from "react";
import { Link } from "react-router-dom";

// Functional component for Reset Password page
function ResetPassword() {
    return (
        // Full-height container to center the card
        <div className="container d-flex justify-content-center align-items-center vh-100">

            {/* Card container */}
            <div
                className="card p-4 shadow-sm"
                style={{ width: "400px", borderRadius: "15px" }}
            >
                {/* Card Heading */}
                <h3 className="text-center mb-3">Reset Password</h3>

                {/* Reset Password Form */}
                <form>

                    {/* OTP Input */}
                    <div className="mb-3">
                        <label className="form-label">Enter OTP</label>
                        <input
                            type="text"
                            className="form-control text-center"
                            placeholder="0 0 0 0 0 0"
                            maxLength="6"
                            required
                        />
                        {/* Resend OTP button */}
                        <div className="text-end mt-1">
                            <button
                                type="button"
                                className="btn btn-link btn-sm text-warning text-decoration-none p-0"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

                    {/* New Password Input */}
                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Confirm New Password Input */}
                    <div className="mb-4">
                        <label className="form-label">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Update Password Button */}
                    <button
                        type="submit"
                        className="btn btn-warning w-100 text-white rounded-pill mb-3"
                    >
                        Update Password
                    </button>

                    {/* Link to go back to Login page */}
                    <div className="text-center">
                        <Link
                            to="/login"
                            className="text-decoration-none text-muted small"
                        >
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Export component
export default ResetPassword;