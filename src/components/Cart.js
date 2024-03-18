import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {

    alert('Procesando pago...'); 
    
    clearCart();
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.product.ProductPrice * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.product.ProductImg} alt={item.product.ProductName} />
                <div>
                  <h3>{item.product.ProductName}</h3>
                  <p>${item.product.ProductPrice}.00 x {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <p>Total: ${calculateTotal()}.00</p>
          </div>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;