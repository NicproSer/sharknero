import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/LOGO.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  border-3 navbar-dark ">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="/portfolio" className="nav-link">
              Portafolio
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i class="bx bx-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
