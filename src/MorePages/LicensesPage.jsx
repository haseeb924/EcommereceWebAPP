// src/Pages/LicensesPage.jsx

import React from "react";
import "./LicensesPage.css"; // Import the CSS file for styling

const LicensesPage = () => {
  return (
    <div className="licenses-page">
      <h1>Licenses and Acknowledgments</h1>
      <p>
        This application uses open-source libraries and assets. We acknowledge
        and are grateful to the following open-source projects:
      </p>

      {/* Example of listing libraries and their licenses */}
      <ul className="licenses-list">
        <li>
          <strong>React</strong> - MIT License<br />
          Copyright (c) Facebook, Inc. and its affiliates.
        </li>
        <li>
          <strong>React Router</strong> - MIT License<br />
          Copyright (c) React Training.
        </li>
        <li>
          <strong>Axios</strong> - MIT License<br />
          Copyright (c) Matt Zabriskie.
        </li>
        {/* Add more libraries as needed */}
      </ul>

      <p>
        Please refer to each project's repository for more details on their
        licensing terms.
      </p>
    </div>
  );
};

export default LicensesPage;
