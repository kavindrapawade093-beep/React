import React from "react";

// ✅ StatCard Component
// Props:
//  - number: the main statistic number to display
//  - label: the description for the statistic
function StatCard({ number, label }) {
    return (
        // ✅ Each card is a Bootstrap column with center-aligned text
        <div className="col-md-3 text-center ">

            {/* Number displayed prominently */}
            <h2 className="text-warning">{number}</h2>

            {/* Label describing the statistic */}
            <p>{label}</p>
        </div>
    );
}

// Export the StatCard component
export default StatCard;