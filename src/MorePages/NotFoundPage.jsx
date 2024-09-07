// src/Pages/404Page.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"; // Import the CSS file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-button">Go Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
