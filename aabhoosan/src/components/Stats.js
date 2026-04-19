import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatCard from "./StatCard";
// 24×7
// ✅ Stats Component
// This component displays key statistics of the platform
function Stats() {
    // ✅ Array of statistics to display
    // Each object contains a 'number' and a descriptive 'label'
    const statsData = [
        { number: "0", label: "Lakh+ Seller Community" }, // Total seller community
        { number: "24×7", label: "Online Business" },     // 24x7 online business support
        { number: "0", label: "Days Payment" },           // Payment duration
        { number: "0", label: "Pincodes Served" },       // Coverage area
    ];

    return (
        // ✅ Bootstrap container for proper spacing
        <div className="container" style={{ fontFamily: " Poppins", backgroundColor: "#D5B667" }}>

            {/* 
                ✅ Row to hold all statistic cards
                - bg-light: light background
                - p-4: padding
                - rounded: rounded corners
                - shadow: subtle shadow effect
                - text-center: center all text
                - border: thin border around container
                - marginTop: negative value to overlap with previous section
            */}
            <div
                className="row bg-light p-4 rounded shadow text-center border border-1"
                style={{ marginTop: "-40px", backgroundColor: "#D5B667" }}
            >
                {/* 
                    ✅ Loop through statsData array
                    - Render a StatCard for each statistic
                    - Pass number and label as props
                */}
                {statsData.map((item, index) => (
                    <StatCard
                        key={index}          // ✅ Unique key for React rendering
                        number={item.number}  // Number to display
                        label={item.label}    // Label text
                    />
                ))}
            </div>
        </div>
    );
}

// ✅ Export the Stats component to use in other parts of the app
export default Stats;