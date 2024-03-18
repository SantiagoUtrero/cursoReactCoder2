import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../global/ProductsContext';
import { CartContext } from '../global/CartContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, e) => {
    const value = parseInt(e.target.value);
    setQuantities(prevState => ({
      ...prevState,
      [productId]: value,
    }));
  };

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length === 0 && <div>slow internet...no products to display</div>}
        {products.map(product => (
          <div className='product-card' key={product.ProductID}>
            <div className='product-img'>
              <img src={product.ProductImg} alt="not found" />
            </div>
            <div className='product-name'>
              {product.ProductName}
            </div>
            <div className='product-price'>
              $ {product.ProductPrice}
            </div>
            <div className="quantity-input">
              <label htmlFor={`quantity-${product.ProductID}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${product.ProductID}`}
                min="1"
                value={quantities[product.ProductID] || ''}
                onChange={(e) => handleQuantityChange(product.ProductID, e)}
              />
            </div>
            <button className='addcart-btn' onClick={() => addToCart(product, quantities[product.ProductID] || 1)}>ADD TO CART</button>
            <Link to={`/product/${product.ProductID}`} className='details-btn'>Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;


