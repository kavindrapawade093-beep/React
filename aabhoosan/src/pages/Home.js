import React from "react";
// Import React to create component

// Import all UI sections (components)
import Navbar from "../components/Navbar";        // Top navigation bar
import Hero from "../components/Hero";            // Hero banner section (main intro)
import Stats from "../components/Stats";          // Statistics section (numbers, achievements)
import WhySell from "../components/WhySell";      // Reasons to sell (features/benefits)
import HowItWorks from "../components/HowItWorks"; // Steps explanation section
import SellSection from "../components/SellSection"; // Product selling showcase
import SellerBenefits from "../components/SellerBenefits"; // Seller advantages
import Testimonials from "../components/Testimonials"; // Customer reviews
import Footer from "../components/Footer";        // Footer section

// Functional component for Home Page
function Home() {
    return (
        <>


            {/* 🔹 Hero Section (First visible section) */}
            <Hero />

            {/* 🔹 Stats Section (Shows numbers like users, sales, etc.) */}
            <Stats />

            {/* 🔹 Why Sell Section */}
            <WhySell />

            {/* 🔹 How It Works Section */}
            <HowItWorks />

            {/* 🔹 Sell Section (Product showcase or categories) */}
            <SellSection />

            {/* 🔹 Seller Benefits Section */}
            <SellerBenefits />

            {/* 🔹 Testimonials Section (Customer feedback) */}
            <Testimonials />


        </>
    );
}

// Export component to use in routing (App.js)
export default Home;