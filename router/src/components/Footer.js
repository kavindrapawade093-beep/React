import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer-bg text-light pt-5 pb-4">
            <div className="container">
                <div className="row gy-4">

                    {/* Column 1 */}
                    <div className="col-md-4">
                        <p>
                            GT Road, Dhandari Kalan, Ludhiana-141003,<br />
                            Punjab, India
                        </p>
                        <p>
                            <strong>0161 468 4800</strong> | <strong>+91 7696089989</strong>
                        </p>

                        <p className="mt-3">
                            <strong>Avon Newage Cycles Pvt. Ltd.</strong><br />
                            Lall kalan, On LDH-CHD Road,<br />
                            near Neelon Bridge, Ludhiana.
                        </p>

                        <p className="mt-3">
                            <strong>Email:</strong><br />
                            avon@avoncycles.com
                        </p>

                        <p>
                            <strong>Timings:</strong><br />
                            6 Days a week from 10:00 am to 6:00 pm
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-3">
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaInstagram />
                            <FaYoutube />
                            <FaLinkedinIn />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-2">
                        <h6 className="footer-title">Cycle's By Brand</h6>
                        <ul className="footer-list">
                            <li>Avon</li>
                            <li>Cyclus</li>
                            <li>Avon Fitness Machines</li>
                            <li>E-world of Avon</li>
                            <li>Cyclelec</li>
                            <li>Cambio</li>
                            <li>Edze</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-2">
                        <h6 className="footer-title">By Categories</h6>
                        <ul className="footer-list">
                            <li>MTB Cycles (Single Speed)</li>
                            <li>MTB (Geared)</li>
                            <li>Ladies Cycles</li>
                            <li>Kids Cycles</li>
                            <li>Electric Cycles</li>
                            <li>Fat Bike</li>
                            <li>Roadsters Cycles</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-2">
                        <h6 className="footer-title">Company</h6>
                        <ul className="footer-list">
                            <li>About Us</li>
                            <li>History</li>
                            <li>Production</li>
                            <li>CSR</li>
                            <li>Career</li>
                            <li>Investor</li>
                            <li>Life at Avon</li>
                            <li>Corporate</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="col-md-2">
                        <h6 className="footer-title">Useful Links</h6>
                        <ul className="footer-list">
                            <li>Accolades/Award</li>
                            <li>Blogs</li>
                            <li>News</li>
                            <li>Brand Assets</li>
                            <li>Media</li>
                            <li>Warranty Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Shipping & Policy</li>
                            <li>Returns & Refunds</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
