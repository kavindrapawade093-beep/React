// ✅ Testimonials Component
// This component displays reviews and feedback from jewellery sellers about TheAabhoosaan
// What Jewellery Sellers Say About TheAabhoosan
import React from 'react';

// ✅ Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// ✅ Import Bootstrap JS bundle only if you need dropdowns, modals, or JS components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Testimonials = () => {
    // ✅ Array of seller reviews
    // Each review contains stars, testimonial text, seller name, and location
    const reviews = [
        {
            stars: "★★★★★",
            text: "TheAabhoososan helped us reach customers across India. Weekly payouts and zero hidden charges make it the best platform for jewellery sellers.",
            name: "Rajasthan Gold House",
            location: "Jaipur"
        },
        {
            stars: "★★★★★",
            text: "Inventory management is super easy. Their seller support team actually responds and solves issues fast.",
            name: "Shree Silver Jewels",
            location: "Udaipur"
        },
        {
            stars: "★★★★☆",
            text: "Perfect platform for handmade and bridal jewellery. Sales analytics helped us understand customer demand better.",
            name: "Bridal Artisans",
            location: "Delhi"
        }
    ];

    return (
        // ✅ Section wrapper for testimonials
        <section className="testimonial-section py-5" style={{ fontFamily: " Poppins" }}>
            <div className="container text-center">

                {/* ✅ Header Section */}
                <div className="mb-5">
                    {/* Badge / label above the title */}
                    <span className="badge rounded-pill bg-light text-warning mb-3 px-3 py-2 border border-warning-subtle">
                        TRUSTED SELLERS
                    </span>

                    {/* Main Title */}
                    <h2 className="fw-bold display-6 text-navy mb-3">
                        What Jewellery Sellers Say About <span className="text-gold">TheAabhoosan</span>
                    </h2>

                    {/* Subtitle / description */}
                    <p className="text-muted">
                        Trusted by <strong>500+ jewellery sellers</strong> across India
                    </p>
                </div>

                {/* ✅ Testimonials Cards Grid */}
                <div className="row g-4 justify-content-center">
                    {reviews.map((review, index) => (
                        <div className="col-md-4" key={index}>
                            {/* Individual testimonial card */}
                            <div className="testimonial-card h-100 p-4 shadow-sm rounded-4 border-0">

                                {/* Star Rating */}
                                <div className="stars mb-3">{review.stars}</div>

                                {/* Testimonial Text */}
                                <p className="testimonial-text text-muted mb-4 italic">
                                    "{review.text}"
                                </p>

                                {/* Seller Name and Location */}
                                <div className="mt-auto">
                                    <h6 className="fw-bold mb-0 text-navy">{review.name}</h6>
                                    <small className="text-muted">{review.location}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

// ✅ Export the component to use it in other parts of the app
export default Testimonials;