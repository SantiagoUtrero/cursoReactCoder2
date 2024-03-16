import React from 'react'
import Products from './Products'
import Navbar from './Navbar'
import '../css/Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Products/>
    </div>
  )
}

export default Home
