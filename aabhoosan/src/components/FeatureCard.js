import React from "react";

// Functional component for a single feature card
// Props: icon (JSX element), title (string), desc (string)
function FeatureCard({ icon, title, desc }) {
    return (
        // Column wrapper for responsive layout
        <div className="col-md-3 mb-4">

            {/* Card container */}
            <div className="card text-center h-100 shadow-sm rounded-4 p-3 border-1">

                {/* Icon section */}
                <div className="mb-3" style={{ fontSize: "40px" }}>
                    {icon}
                </div>

                {/* Title section */}
                <h5 className="fw-bold">{title}</h5>

                {/* Description section */}
                <p className="text-muted small">{desc}</p>
            </div>
        </div>
    );
}

// Export the FeatureCard component
export default FeatureCard;








// ✔ Uses props for dynamic data
// ✔ Follows component-based architecture
// ✔ Reusable and scalable
// ✔ Uses Bootstrap for styling
// ✔ Clean and maintainable code