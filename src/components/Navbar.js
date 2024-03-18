import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbox'>
      <div className='leftside'>
        <p>LOGO</p>
      </div>
      <div className='rightside'>
        <Link to='signup'className='navlinks'> SIGN UP</Link>
        <Link to='login' className='navlinks'> LOGIN</Link>
        <Link to="cartproducts" className='navlink'>🛒</Link>
      </div>
    </div>
  )
}

export default Navbar;
