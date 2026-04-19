import React from "react"; // Import React library
import { useNavigate } from "react-router-dom"; // Hook for navigation between pages

// Functional component for Forgot Password page
function ForgotPassword() {

    // Initialize navigation function
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSendOTP = (e) => {
        e.preventDefault(); // Prevent page reload on form submit

        // 👉 Here you can add API call to send OTP to user's email

        // After sending OTP, navigate to Reset Password page
        navigate("/reset-password");
    };

    return (
        // Full screen container with center alignment
        <div className="container d-flex justify-content-center align-items-center vh-100">

            {/* Card container */}
            <div
                className="card p-4 shadow-sm"
                style={{ width: "400px", borderRadius: "15px" }}
            >

                {/* Page heading */}
                <h3 className="text-center mb-3">Forgot Password</h3>

                {/* Instruction text */}
                <p className="text-muted text-center small">
                    Enter your email to receive a 6-digit OTP
                </p>

                {/* Form starts */}
                <form onSubmit={handleSendOTP}>

                    {/* Email input field */}
                    <div className="mb-4">
                        <label className="form-label">Email Address</label>

                        <input
                            type="email"                 // Email input type
                            className="form-control"     // Bootstrap styling
                            placeholder="example@mail.com" // Placeholder text
                            required                     // Required field validation
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="btn btn-warning w-100 text-white rounded-pill"
                    >
                        Send OTP
                    </button>

                </form>
                {/* Form ends */}

            </div>
        </div>
    );
}

// Export component so it can be used in other files
export default ForgotPassword;