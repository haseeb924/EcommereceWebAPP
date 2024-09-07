import React from "react";
import aboutimg from "../assets/about us.jpg";
import { FaRegStar, FaSmile, FaLightbulb, FaPaintBrush, FaLeaf, FaFire } from 'react-icons/fa'; // Importing icons from React Icons
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      {/* Centered Heading */}
      <h1 className="about-us-heading">About Crescendo</h1>

      {/* Content Section with Image and Story */}
      <div className="about-us-content">
        {/* Left Image */}
        <div className="about-us-image">
          <img src={aboutimg} alt="About Us" />
        </div>

        {/* Right Story Section */}
        <div className="about-us-story">
          <h2>Our Story</h2>
          <p>
            We started our journey with a vision to provide quality products and
            exceptional service to our customers. Over the years, we have grown
            into a trusted brand, known for our commitment to excellence. Our
            team is passionate about creating a delightful shopping experience
            for you. We believe in innovation and continuously strive to bring
            new and exciting products to the market. Our journey is driven by
            the desire to make a positive impact in our community and beyond.
            Join us on this journey as we continue to grow and evolve, always
            putting our customers first.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-us-stats">
        <div className="stat-item">
          <h3>20+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>Audio Products</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Industry Awards</p>
        </div>
        <div className="stat-item">
          <h3>100K+</h3>
          <p>Community Members</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="about-us-cards">
        <div className="card">
          <FaRegStar className="card-icon" />
          <h3>Quality</h3>
          <p>
            We prioritize top-notch quality in every product we offer. 
            Our rigorous quality checks ensure that each item meets 
            high standards. We use the best materials and advanced 
            techniques to guarantee superior performance. Our commitment 
            to quality is unwavering, aiming to exceed customer expectations.
          </p>
        </div>
        <div className="card">
          <FaSmile className="card-icon" />
          <h3>Customer Satisfaction</h3>
          <p>
            Our customers are at the heart of everything we do. 
            We strive to provide exceptional service and support. 
            Feedback is actively sought and used to improve our offerings. 
            We aim to create a positive and memorable experience for 
            every customer. Your satisfaction is our top priority.
          </p>
        </div>
        <div className="card">
          <FaLightbulb className="card-icon" />
          <h3>Innovation</h3>
          <p>
            We embrace innovation to stay ahead in the industry. 
            Our team constantly explores new ideas and technologies. 
            We integrate the latest trends into our products to offer 
            cutting-edge solutions. Innovation drives us to continuously 
            enhance and evolve our offerings for the future.
          </p>
        </div>
        <div className="card">
          <FaPaintBrush className="card-icon" />
          <h3>Design Excellence</h3>
          <p>
            Design is a core aspect of our brand philosophy. 
            We focus on creating aesthetically pleasing and functional 
            products. Our design team ensures that each product stands 
            out in terms of both style and usability. We value creativity 
            and attention to detail in every design element.
          </p>
        </div>
        <div className="card">
          <FaLeaf className="card-icon" />
          <h3>Sustainability</h3>
          <p>
            Sustainability is central to our operations. 
            We implement eco-friendly practices in our production process. 
            Our materials are sourced responsibly to minimize environmental 
            impact. We are committed to reducing our carbon footprint 
            and promoting a greener future.
          </p>
        </div>
        <div className="card">
          <FaFire className="card-icon" />
          <h3>Passion for Shine</h3>
          <p>
            Our passion fuels everything we do. 
            We are dedicated to bringing excitement and energy into 
            our products. This enthusiasm drives us to go above and beyond 
            to deliver exceptional results. Our passion is evident in 
            the quality and innovation we bring to the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
