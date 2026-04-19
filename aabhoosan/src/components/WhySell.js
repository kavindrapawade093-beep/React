import React from "react";
import FeatureCard from "./FeatureCard";
// Why Sell on TheAabhoosan?
function WhySell() {
    const features = [
        {
            icon: "🧾",
            title: "Easy Registration",
            desc: "Quick seller onboarding with minimal documentation.",
        },
        {
            icon: "💰",
            title: "Higher Margins",
            desc: "Low commission structure means more profit for you.",
        },
        {
            icon: "🚚",
            title: "Pan-India Delivery",
            desc: "Ship your jewellery to customers across India.",
        },
        {
            icon: "🛠️",
            title: "Seller Support Team",
            desc: "Dedicated support to help you at every step.",
        },
    ];

    return (
        <section className="py-5 bg-light" style={{ fontFamily: " Poppins" }}>
            <div className="container text-center">

                {/* Heading */}
                <h2 className="fw-bold mb-2">
                    Why Sell on <span className="text-warning">TheAabhoosan?</span>
                </h2>

                <p className="text-muted mb-5">
                    Everything you need to grow your jewellery business online
                </p>

                {/* Cards */}
                <div className="row">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhySell;