import React from 'react'
import Logo from '../assets/LOGO.png';

export const Navbar = () => {
  return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 row">
              <div className="col-md-4 Logo">
                <a href="/">
                  <img src={Logo} alt="Logo" width="80" />
                </a>
              </div>
              <div className="col-md-8">
                <nav className="navbar navbar-expand-md navbar-dark">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav ms-3">
                      <a href="/" className="nav-link">
                        Inicio
                      </a>
                      <a href="/about" className="nav-link">
                        Nosotros
                      </a>
                      <a href="/services" className="nav-link">
                        Servicios
                      </a>
                      <a href="/portfolio" className="nav-link">
                        Portafolio
                      </a>
                      <a href="/" className="nav-link">
                        Blog
                      </a>
                      <a href="/login" className="nav-link">
                        <i class="bx bx-user"></i>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
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
                <a href="/login">
                  <i class="bx bx-user"></i>
                </a>
                <a href="https://wa.me/393802146360">
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
                    <img src={Logo} alt="" width={100} />
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
                      <a href="/">Servicios</a>
                    </li>
                    <li>
                      <a href="/">Portafolio</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Cuenta</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    
  );
}