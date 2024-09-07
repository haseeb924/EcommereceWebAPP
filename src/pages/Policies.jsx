// Policies.js
import React from 'react';
import './Policies.css'; // Import the CSS file

const Policies = () => {
  return (
    <div className="policies-container">
      <header className="policies-header">
        <h1 className="policies-heading">Our Policies</h1>
        <p className="policies-description">
          We are committed to ensuring transparency and protecting your rights. Below are our key policies. If you have any questions, please feel free to reach out to us.
        </p>
      </header>

      <section className="policies-section">
        <h2 className="section-heading">Privacy Policy</h2>
        <p className="section-content">
          Our Privacy Policy outlines how we handle your personal information. We ensure that your data is protected and used responsibly. For more details, please read our full Privacy Policy.
        </p>
      </section>

      <section className="policies-section">
        <h2 className="section-heading">Terms of Service</h2>
        <p className="section-content">
          The Terms of Service describe the rules and guidelines for using our services. By accessing or using our services, you agree to these terms. For a detailed explanation, please review our Terms of Service.
        </p>
      </section>

      <section className="policies-section">
        <h2 className="section-heading">Refund Policy</h2>
        <p className="section-content">
          Our Refund Policy provides information about our procedures for refunds and exchanges. We aim to ensure that our customers are satisfied with their purchases. For more information, please read our Refund Policy.
        </p>
      </section>
    </div>
  );
};

export default Policies;
