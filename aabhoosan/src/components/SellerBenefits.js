import React from 'react';
// Grow Your Jewellery Business
// SellerBenefits Component
const SellerBenefits = () => {

    // ✅ List of key benefits shown as checkmarks
    const checkmarks = [
        "100% Transparent Pricing",
        "Weekly & Reliable Payouts",
        "Easy Inventory Control",
        "Real-time Sales & Order Analytics",
        "Dedicated Seller Support Team"
    ];

    // ✅ Grid cards with detailed benefit info
    const cards = [
        {
            title: "No Hidden Charges",
            text: "No listing fee, no commission shock — you earn what you deserve."
        },
        {
            title: "Weekly Payouts",
            text: "Fast and secure payments directly to your bank account."
        },
        {
            title: "Inventory Management",
            text: "Manage gold, silver & handmade jewellery stock easily."
        },
        {
            title: "Sales Analytics",
            text: "Track best-selling designs & customer demand trends."
        }
    ];

    return (
        // Section container
        <section className="benefits-section py-5" style={{ fontFamily: " Poppins" }} >
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Column: Text Content with Badge, Heading, Description & Checkmarks */}
                    <div className="col-lg-5 mb-5 mb-lg-0">

                        {/* Section Badge */}
                        <span className="badge rounded-pill bg-light text-warning mb-3 px-3 py-2 border border-warning-subtle">
                            SELLER BENEFITS
                        </span>

                        {/* Heading */}
                        <h1 className="fw-bold display-5 mb-3 text-navy">
                            Grow Your Jewellery Business <br />
                            <span className="text-gold">With THEAABHOOSAN</span>
                        </h1>

                        {/* Short Description */}
                        <p className="text-muted mb-4 lead-sm">
                            THEAABHOOSAN is built especially for jewellery sellers who want better
                            margins, faster payments, and complete business control — without marketplace pressure.
                        </p>

                        {/* Checkmarks List */}
                        <ul className="list-unstyled">
                            {checkmarks.map((item, index) => (
                                <li key={index} className="mb-2 d-flex align-items-center fw-medium">
                                    <span className="me-2">✓</span> {item}  {/* ✅ Each benefit with checkmark */}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Grid of Benefit Cards */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {cards.map((card, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="benefit-card h-100 p-4 shadow-sm border-0 rounded-4">
                                        {/* Card Title */}
                                        <h5 className="fw-bold mb-3">{card.title}</h5>
                                        {/* Card Text */}
                                        <p className="text-muted mb-0">{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Export SellerBenefits component
export default SellerBenefits;