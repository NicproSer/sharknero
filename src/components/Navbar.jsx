import React from "react";
import Logo from "../assets/LOGO.png";

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
                      <a href="/blog" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        href="#"
                      >
                        <i class="bx bx-user"></i>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/login" className="dropdown-item">
                              Iniciar Sesión
                            </a>
                          </li>
                          <li>
                            <a href="/register" className="dropdown-item">
                              Registrarse
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                  </ul>
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
                    <a href="/about">Nosotros</a>
                  </li>
                  <li>
                    <a href="/services">Servicios</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portafolio</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/login">Cuenta</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
