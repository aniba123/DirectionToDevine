
// import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import logodtd from '../../assets/logodtd.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-div'>
      <Link to='/'>  <img src={logodtd} className='self-logo'/></Link>
      </div>
     <div className='link'>
     <Link to='/'>Home</Link>
     <Link to='/books'>Books</Link>
     <Link to='/courses'>Courses</Link>
      <Link to='/donate'>Donate</Link>
      <Link to='/register'>Register</Link>
     </div>
    </div>
  )
}

export default Navbar;
