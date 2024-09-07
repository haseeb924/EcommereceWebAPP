import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Componets/ProductCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "./Cartcontext";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      const uniqueCategories = ["All", ...new Set(response.data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category") || "All";
    setSelectedCategory(categoryParam);
  }, [searchParams]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/shop?category=${category}`);
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="shop-container">
      <div className="product-header">
        <h1 className="shop-heading">Our Products</h1>
        <p className="product-description">
          Explore our wide range of high-quality products...
        </p>
      </div>

      <div className="shop-content">
        <div className="category-sidebar">
          <h3>Categories</h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active-category" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.image}
              price={product.price}
              clickHandler={() => navigate(`/product-details/${product.id}`)}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
