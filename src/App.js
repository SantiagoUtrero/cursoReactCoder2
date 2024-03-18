import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProducts from './components/addProducts';
import { ProductsContextProvider } from './global/ProductsContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { CartContextProvider } from './global/CartContext';

export class App extends Component {

  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cartproducts" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }
}

export default App;

