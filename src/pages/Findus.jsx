// FindUs.js
import React from 'react';
import './FindUs.css'; // Import the CSS file

const FindUs = () => {
  return (
    <div className="findus-container">
      <header className="findus-header">
        <h1 className="findus-heading">Find Us</h1>
        <p className="findus-description">
          We are located at the heart of the city, providing excellent services with a dedicated team. Feel free to reach out to us via email or phone. You can also visit us in person.
        </p>
      </header>
      
      <section className="findus-map">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0731430436116!2d88.36214621479164!3d22.572648485261906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275805b1c7a99%3A0x8cf6bb99e925cf91!2sKolkata%2C%20West%20Bengal%20470016%2C%20India!5e0!3m2!1sen!2sus!4v1627363134512!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      
      <section className="findus-contact">
        <h2 className="contact-heading">Contact Information</h2>
        <p className="contact-item">
          <strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p className="contact-item">
          <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </section>
      
      <section className="findus-form">
        <h2 className="form-heading">Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea"
              required
            />
          </div>
          <button type="submit" className="form-button">Send</button>
        </form>
      </section>
      
      <section className="findus-faq">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3 className="faq-question">What are your working hours?</h3>
          <p className="faq-answer">We are open from 9 AM to 6 PM, Monday through Friday.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">How can I schedule an appointment?</h3>
          <p className="faq-answer">You can schedule an appointment by calling us or filling out the contact form on this page.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Where are you located?</h3>
          <p className="faq-answer">Our office is located at 123 Main Street, City, Country.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Do you offer online consultations?</h3>
          <p className="faq-answer">Yes, we offer online consultations. Please contact us for more details.</p>
        </div>
      </section>
    </div>
  );
};

export default FindUs;
