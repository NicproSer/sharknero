import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { ScrollButton } from "../ScrollButton";

class Services extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div id="servicios" className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Servicios</h1>
            </div>
          </div>
          <div className="row mb-5" id="precios">
            <div className="col-lg-4">
              <div className="card mb-5 shadow card-price">
                <div className="card-header text-center">
                  <h2 className="text-center">Página Web</h2>
                  <h3 className="text-center">Desde 125$</h3>
                </div>
                <div className="card-body">
                  <ul class="list-unstyled text-sm mb-4 pricing-feature-list">
                    <li> Diseño e imagen de tu página web </li>
                    <li> Imágenes de stock </li>
                    <li> Adaptada a móviles y 100% responsive </li>
                    <li> 1 idioma </li>
                    <li> Información de la empresa </li>
                    <li> Información de contacto </li>
                    <li> Navegación sencilla </li>
                    <li> Contenido de calidad </li>
                    <li> Botones y ligas de redes sociales </li>
                    <li>
                      <br />
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/cuenta" className="btn btn-primary">
                      Solicitar <i class="bx bx-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 shadow card-price">
                <div className="card-header text-center">
                  <h2>Aplicacion Web</h2>
                  <h3>Desde 165$</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                    <li> Diseño e imagen de tu página web </li>
                    <li> Imágenes de stock </li>
                    <li> Adaptada a móviles y 100% responsive </li>
                    <li> 1 o más idioma </li>
                    <li> Autogestionable </li>
                    <li> Información de la empresa </li>
                    <li> Información de contacto </li>
                    <li> Navegación interactiva </li>
                    <li> Contenido de calidad </li>
                    <li> Botones y ligas de redes sociales </li>
                  </ul>
                  <div className="text-center">
                    <a href="/cuenta" className="btn btn-primary">
                      Solicitar <i class="bx bx-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 shadow card-price">
                <div className="card-header text-center">
                  <h2>Aplicacion Móvil</h2>
                  <h3>Proximamente....</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      <br />
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/cuenta" className="btn btn-primary" disabled>
                      Solicitar <i class="bx bx-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </>
    );
  }
}

export default Services;
