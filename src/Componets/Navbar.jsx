import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../MorePages/Cartcontext";
//import { useCart } from "../MorePages/CartContext";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart(); // Use Cart Context

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="menu-bar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Products ▼</button>
          <div className="dropdown-content">
            <h2>What are you looking for?</h2>
            <a onClick={() => handleCategoryClick("earbuds")}>Mens Clothing</a>
            <a onClick={() => handleCategoryClick("headphones")}>Jewelry</a>
            <a onClick={() => handleCategoryClick("speakers")}>Electronics</a>
            <a onClick={() => handleCategoryClick("accessories")}>Women Clothing</a>
            <a onClick={() => handleCategoryClick("all")}>Discover All Products</a>
          </div>
        </div>

        <Link to="/about">About</Link>
        <Link to="/findus">Find Us</Link>

        <div className="dropdown">
          <button className="dropbtn">Pages ▼</button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/findus">Contact</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/licenses">Licenses</Link>
            <Link to="/changelog">Changelog</Link>
            <Link to="/404">404</Link>
            <Link to="/password">Password</Link>
          </div>
        </div>
      </div>

      <div className="cart-container">
        <Link to="/cart">
          <img
            src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406e3dcc02704d11eb4b6_Cart.svg"
            alt="Cart"
            className="cart-icon"
          />
          <div className="cart-quantity">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </div>
        </Link>
        <Link to="/shop" className="shop-now-button">Shop Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
