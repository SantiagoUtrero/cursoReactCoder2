import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './components/addProducts';
import { ProductsContextProvider } from './global/ProductsContext';

export class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/addproducts' Component={AddProducts}/>
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    )
  }
}

export default App

