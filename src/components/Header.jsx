import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <h1>Techystar</h1>
            
            <main>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/#about">About</Link>
                <Link to="/#bran">Brands</Link>
                <Link to="/services">Services</Link>
            </main>
        </nav>
    );
};

export default Header;
