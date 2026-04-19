// src/pages/Dashboard.jsx
import React from "react";

// ✅ Product data array
// Each product has an id, name, price, description, and image URL
const products = [
    {
        id: 1,
        name: "Gold Necklace",
        price: "₹25,000",
        desc: "Beautiful traditional gold necklace",
        img: "https://seller.theaabhooshan.com/assets/images/categories/gold-jewellery.png",
    },
    {
        id: 2,
        name: "Silver Earrings",
        price: "₹5,000",
        desc: "Elegant silver earrings",
        img: "https://seller.theaabhooshan.com/assets/images/categories/silver-jewellery.png",
    },
    {
        id: 3,
        name: "Bridal Set",
        price: "₹75,000",
        desc: "Perfect bridal jewellery set",
        img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png",
    },
    {
        id: 4,
        name: "Gold Bangles",
        price: "₹15,000",
        desc: "Traditional gold bangles for any occasion",
        img: "https://seller.theaabhooshan.com/assets/images/categories/rajasthani-jewellery.png",
    },
    {
        id: 5,
        name: "Pearl Necklace",
        price: "₹18,000",
        desc: "Elegant pearl necklace with gold clasp",
        img: "https://seller.theaabhooshan.com/assets/images/categories/Fesion-jewellery.png",
    },
    {
        id: 6,
        name: "Diamond Ring",
        price: "₹50,000",
        desc: "Sparkling diamond ring for engagements",
        img: "https://seller.theaabhooshan.com/assets/images/categories/handmade-jewellery.png",
    },
    {
        id: 7,
        name: "Gold Earrings Set",
        price: "₹12,000",
        desc: "Classic gold earrings set for festive occasions",
        img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png",
    },
    {
        id: 8,
        name: "Silver Bracelet",
        price: "₹8,000",
        desc: "Stylish silver bracelet for daily wear",
        img: "https://seller.theaabhooshan.com/assets/images/categories/rajasthani-jewellery.png",
    },
    {
        id: 9,
        name: "Gold Mangalsutra",
        price: "₹30,000",
        desc: "Traditional mangalsutra with gold beads",
        img: "https://seller.theaabhooshan.com/assets/images/categories/silver-jewellery.png",
    },
    {
        id: 10,
        name: "Kundan Necklace",
        price: "₹40,000",
        desc: "Intricate Kundan work necklace for weddings",
        img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png",
    },
    {
        id: 11,
        name: "Ruby Ring",
        price: "₹35,000",
        desc: "Elegant ruby gemstone ring with gold setting",
        img: "https://seller.theaabhooshan.com/assets/images/categories/rajasthani-jewellery.png",
    },
    {
        id: 12,
        name: "Emerald Earrings",
        price: "₹28,000",
        desc: "Stunning emerald stud earrings with gold",
        img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png",
    },
    {
        id: 13,
        name: "Gold Anklet",
        price: "₹10,000",
        desc: "Traditional gold anklet with intricate design",
        img: "https://seller.theaabhooshan.com/assets/images/categories/temple-jewellery.png",
    },
    {
        id: 14,
        name: "Silver Pendant",
        price: "₹6,500",
        desc: "Beautiful silver pendant with detailed craftsmanship",
        img: "https://seller.theaabhooshan.com/assets/images/categories/handmade-jewellery.png",
    },

    {
        id: 11,
        name: "Ruby Ring",
        price: "₹35,000",
        desc: "Elegant ruby gemstone ring with gold setting",
        img: "https://seller.theaabhooshan.com/assets/images/categories/rajasthani-jewellery.png",
    },
    {
        id: 12,
        name: "Emerald Earrings",
        price: "₹28,000",
        desc: "Stunning emerald stud earrings with gold",
        img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png",
    }
];

// ✅ Dashboard Component
// Displays all products in a responsive grid using Bootstrap
const Dashboard = () => {
    return (
        <div className="container py-5 " style={{ fontFamily: "Poppins" }}>
            {/* Page Heading */}
            <h2
                className="text-center mb-5 fw-bold"
                style={{ color: "#B8860B" }} // Aabhooshan gold theme
            >
                Aabhooshan Collection
            </h2>

            {/* Bootstrap Row with gap between cards */}
            <div className="row g-4">
                {products.map((item) => (
                    // ✅ Each product is a column
                    <div
                        key={item.id} // Unique key for React rendering
                        className="col-12 col-sm-6 col-md-4 col-lg-3" // Responsive grid
                    >
                        {/* Card */}
                        <div className="card h-100 shadow-sm border-0 position-relative">
                            {/* Wishlist Heart Icon */}
                            <span
                                className="position-absolute top-0 end-0 m-2 fs-5 text-danger"
                                style={{ cursor: "pointer" }}
                            >
                                ❤️
                            </span>

                            {/* Product Image */}
                            <img
                                src={item.img}
                                className="card-img-top img-fluid p-3"
                                alt={item.name}
                                style={{ height: "200px", objectFit: "contain" }} // Maintain aspect ratio
                            />

                            {/* Card Body */}
                            <div className="card-body text-center d-flex flex-column">
                                {/* Product Name */}
                                <h5 className="card-title">{item.name}</h5>

                                {/* Product Description */}
                                <p className="card-text text-muted small flex-grow-1">{item.desc}</p>

                                {/* Product Price */}
                                <h6 className="text-success fw-bold">{item.price}</h6>

                                {/* Add to Cart Button */}
                                <button className="btn btn-warning text-white mt-3">
                                    Add to Cart 🛒
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export Dashboard component
export default Dashboard;