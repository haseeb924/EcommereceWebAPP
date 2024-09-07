import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Componets/ProductCard";
import homeImg from "../assets/homeimg.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const allProducts = response.data;

      // Get unique categories and slice the first 4 categories
      const uniqueCategories = [
        ...new Set(allProducts.map((product) => product.category)),
      ].slice(0, 4);
      setCategories(uniqueCategories);

      // Find one product for each category
      const productsByCategory = uniqueCategories.map((category) =>
        allProducts.find((product) => product.category === category)
      );
      setCategoryProducts(productsByCategory);

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Navigate to product details page
  const handleCardClick = (product) => {
    navigate(`/product-details/${product.id}`, {
      state: { category: product.category },
    });
  };

  return (
    <>
      <div className="banner">
        <div className="content">
          <h1>Elevate Your Audio Journey</h1>
          <p>Experience Sound in Its Purest Form</p>
          <div className="buttons">
            <button onClick={() => navigate("/shop")} className="shop-btn">
              Shop Now
            </button>
            <button onClick={() => navigate("/about")} className="learn-btn">
              Learn More
            </button>
          </div>
        </div>
        <div className="image">
          <img src={homeImg} alt="Person listening to music" />
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h1>Featured Products</h1>
        <div className="products-grid">
          {categoryProducts.map((product) =>
            product ? (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.image}
                price={product.price}
                clickHandler={() => handleCardClick(product)}
              />
            ) : null
          )}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <h1>What Our Customers Say</h1>
        <div className="testimonial-items">
          <div className="testimonial-item">
            <p>"The best audio equipment I've ever used! Highly recommend."</p>
            <span>- Alex J.</span>
          </div>
          <div className="testimonial-item">
            <p>"Fantastic sound quality and great customer service."</p>
            <span>- Jordan M.</span>
          </div>
          <div className="testimonial-item">
            <p>"Excellent products at affordable prices. Will buy again."</p>
            <span>- Taylor R.</span>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h1>Special Offers</h1>
        <div className="offers">
          <div className="offer-item">
            <h2>20% Off on All Headphones</h2>
            <p>Use code HEAD20 at checkout</p>
          </div>
          <div className="offer-item">
            <h2>Buy One Get One Free on Speakers</h2>
            <p>Limited time offer</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter">
        <h1>Stay Updated</h1>
        <p>Sign up for our newsletter to get the latest updates and special offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h1>About Us</h1>
        <p>
          We are dedicated to providing the best audio equipment with top-notch quality and
          customer service. Our goal is to enhance your audio experience and offer the best
          products at competitive prices.
        </p>
      </section>
    </>
  );
};

export default Home;
