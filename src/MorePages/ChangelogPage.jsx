// src/Pages/ChangelogPage.jsx

import React from "react";
import "./ChangelogPage.css"; // Import the CSS file for styling

const ChangelogPage = () => {
  return (
    <div className="changelog-page">
      <h1>Changelog</h1>
      <p>Here you can find the latest updates and changes to our application:</p>

      {/* Example of a changelog entry */}
      <div className="changelog-entry">
        <h2>Version 1.1.0 - September 2024</h2>
        <ul>
          <li>Added new "Licenses" page to display open-source library licenses.</li>
          <li>Improved shopping cart functionality with quantity increment/decrement and image display.</li>
          <li>Fixed bugs related to the navigation bar links.</li>
        </ul>
      </div>

      {/* Add more changelog entries as needed */}
      <div className="changelog-entry">
        <h2>Version 1.0.0 - August 2024</h2>
        <ul>
          <li>Initial release of the application with basic features: Home, Shop, Cart, Product Detail pages.</li>
          <li>Implemented user-friendly navigation with React Router.</li>
          <li>Added basic styling and responsive design.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChangelogPage;
