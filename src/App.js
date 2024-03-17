import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './components/addProducts';
import { ProductsContextProvider } from './global/ProductsContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Cart from './components/Cart';
import { CartContextProvider } from './global/CartContext';



export class App extends Component {
  
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/addproducts' Component={AddProducts}/>
            <Route path='/signup' Component={Signup}/>
            <Route path='/login' Component={Login}/>
            <Route path='/cartproducts' Component={Cart}/>
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App

