import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//import ProductCard from "../Components/ProductCard";
import ProductCard from "../Componets/ProductCard";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState(null); // State to store the current product details
  const [relatedProducts, setRelatedProducts] = useState([]); // State to store related products

  const fetchProductDetails = async () => {
    try {
      // Fetch the current product details
      const productResponse = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(productResponse.data);

      // Fetch all products
      const allProductsResponse = await axios.get("https://fakestoreapi.com/products");
      // Filter products by category excluding the current product
      const productsByCategory = allProductsResponse.data.filter(
        (p) => p.category === productResponse.data.category && p.id !== id
      );
      setRelatedProducts(productsByCategory);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  return (
    <div className="container">
      <h1>Product Details</h1>
      {product ? (
        <div className="product-card">
          <div>
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <div>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button onClick={() => navigate("/products")} className="back-button">
              Back to Products
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {relatedProducts.length > 0 && (
        <>
          <h2 className="related-products-heading">Related Products</h2>
          <div className="products-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                title={relatedProduct.title}
                description={relatedProduct.description}
                imageUrl={relatedProduct.image}
                price={relatedProduct.price}
                clickHandler={() =>
                  navigate(`/product-details/${relatedProduct.id}`)
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
