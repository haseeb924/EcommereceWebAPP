// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css"; // Import the CSS file

const ProductCard = (props) => {
  const { title, imageUrl, price, clickHandler, addToCart } = props;

  return (
    <div
      onClick={clickHandler}
      className="product-card" // Apply the custom CSS class
    >
      {/* Product image */}
      <img
        src={imageUrl}
        alt={title}
        className="product-image" // Apply the custom CSS class
      />

      {/* Product title */}
      <h1 className="product-title">{title}</h1>

      {/* Product price */}
      <p className="product-price">${price.toFixed(2)}</p>

      {/* Add to Cart button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from triggering parent clickHandler
          addToCart(); // Call the addToCart function
        }}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
