import React from "react";
import { useCart } from "./Cartcontext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic here
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              {/* Display product image */}
              <img src={item.imageUrl} alt={item.title} className="cart-item-image" />

              {/* Product details */}
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              {/* Quantity controls */}
              <div className="cart-item-controls">
                <button
                  onClick={() => removeFromCart(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

              {/* Remove button */}
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="buttons-container">
        <button onClick={handleCheckout} className="button proceed-btn">
          Proceed to Checkout
        </button>
        <button onClick={clearCart} className="button clear-btn">
          Clear Cart
        </button>
      </div>
      <Link to="/shop" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartPage;
