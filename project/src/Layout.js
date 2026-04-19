import React from "react";
import Header from "./components/Header";   // ✅ FIX
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <Header />

            <main className="container" style={{ marginTop: "2rem" }}>
                <Outlet />

            </main>


            <Footer />
        </>
    );
}

export default Layout;
