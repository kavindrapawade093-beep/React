import React from "react";
import Header from "./Header";
import Table from "./Table";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />

            <main className="container  " style={{ marginTop: "2rem" }}>
                <Outlet />

            </main>

            <Footer />

        </>
    );
}
export default Layout;