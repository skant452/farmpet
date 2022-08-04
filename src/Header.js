import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Images/Logo.png'
import Logo1 from './Images/Apple.png'
import Logo2 from './Images/Play.png'

const Header = () => {
  return (
    <>
      <div className="wrap-1">
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to={'/'}><img src={Logo} alt=""  className='img-fluid'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto link-btn">
      <li className='nav-item '>
                <Link className='nav-link' to={'/'} aria-current="page">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'/Features'} aria-current="page">Features</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'/Products'} aria-current="page">Products</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'/HowitWorks'} aria-current="page">How it Works</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'/ContactUs'} aria-current="page">Contact Us</Link>
            </li>
      </ul>
            <div className='header-img'>
            <Link to={'/'}><img src={Logo1} alt=""/></Link>
            <Link to={'/'}><img src={Logo2} alt=""/></Link>
            </div>
    </div>
  </div>
</nav>
      </div>
      
    </>
  )
}

export default Header
