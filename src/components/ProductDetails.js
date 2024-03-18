import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductsContext } from '../global/ProductsContext';
import { CartContext } from '../global/CartContext';



const ProductDetails = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find(product => product.ProductID === id);

  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false); 
    }, 2000); 
  };

  return (
    <div>
      <div className="product-details-container">
        <h2>Product Details</h2>
        <div className="details">
          <img src={product.ProductImg} alt={product.ProductName} />
          <div>
            <h3>{product.ProductName}</h3>
            <p>Price: ${product.ProductPrice}</p>
          </div>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showNotification && (
          <div className="notification">
            Product added to cart successfully!
          </div>
        )}
        <Link to="/cartproducts" className="go-to-cart-btn">Go to Cart</Link>
      </div>
    </div>
  );
};

export default ProductDetails;