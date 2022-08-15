import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Contáctanos</h3>
              <ul>
                <li>
                  <i className="bx bxs-map"></i>
                  <span>Valencia, Venezuela</span>
                </li>
                <li>
                  <i className="bx bxs-map"></i>
                  <span>Pisa, Italia</span>
                </li>
                <li>
                  <i className="bx bxl-whatsapp"></i>
                  <a
                    href="https://wa.me/393802146360"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:sharkneroapps@gmail.com">
                    sharkneroapps@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
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
            <div className="col-md-4">
              <h3>Síguenos</h3>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.instagram.com/sharkneroapps/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Shark-Nero-106790598233074"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sharkneroweb/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="politicas">
                <h3>Políticas</h3>
                <ul>
                  <li>
                    <a href="/privacy">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="/">Términos y condiciones</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="credits">
        <div className="container" align="center">
          <p>SHARK NERO &copy; {new Date().getFullYear()}
          <br />
          Todos los derechos reservados
          </p>
        </div>
      </div>
    </>
  );
}

