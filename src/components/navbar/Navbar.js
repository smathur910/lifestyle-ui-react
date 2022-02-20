import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} style={{width: "100px"}}/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">About company</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gallery</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="#">Contacts</a>
          </li>
          <li>
          <a className="navbar-brand con-number" href="#">
            +38(022)23-44-55
        </a>
        </li>

        <button className="btn btn-primary reqst-call" type="submit">Request a call</button>

        </ul>
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
