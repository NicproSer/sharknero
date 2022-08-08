import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/LOGO.png';

export const Navbar = () => {
  return (
    <>
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
      <div className="menu_movil">
        <a href="/">
          <i class="bx bx-home"></i>
        </a>
        <a
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <i class="bx bx-menu"></i>
        </a>
        <a href="/">
          <i class="bx bx-user"></i>
        </a>
        <a href="/">
          <i class="bx bxl-whatsapp"></i>
        </a>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasExampleLabel" className="offcanvas-title">
            <img src={Logo} alt="logo" className="logo" />
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
              <a href="/">Cotiza Aquí</a>
            </li>
            <li>
              <a href="/">FAQS</a>
            </li>
            <li>
              <a href="/">Iniciar Sesión</a>
            </li>
            <li>
              <a href="/">Registrarme</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
