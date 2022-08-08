import React from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 row">
            <div className="col-md-4 Logo">
              <a href="/">Baby Genio</a>
            </div>
            <div className="col-md-8">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="nav-link">
                  Inicio
                </a>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a href="/" className="nav-link">
                      Nosotros
                    </a>
                    <a href="/" className="nav-link">
                      Cotiza Aquí
                    </a>
                    <a href="/" className="nav-link">
                      Contacto
                    </a>
                    <a href="/" className="nav-link">
                      FAQS
                    </a>
                    <a href="/" className="nav-link">
                      <i class="bx bx-shopping-bag"></i>
                      <span>0</span>
                    </a>
                    <a href="/" className="nav-link">
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
              <a href="/">
                <i class="bx bx-shopping-bag"></i>
                <span>0</span>
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
                  Baby Genio
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
                  <li><a href="/">Nosotros</a></li>
                  <li><a href="/">Cotiza Aquí</a></li>
                  <li><a href="/">FAQS</a></li>
                  <li><a href="/">Iniciar Sesión</a></li>
                  <li><a href="/">Registrarme</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
