import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import UsersImg from "../../assets/UsersThree.png";

class About extends React.Component {
  render() {
    return (
      <>
      <Preloader/>
      <Navbar />
      <div className="container" id="about">
        <div className="row">
            <div className="col-md-12">
              <h1>Nosotros</h1>
              <p>
                <strong>SHARK NERO</strong> posee una columna principal de 4 bloques que le proporcionan la solidez necesaria para acompañar a sus clientes en el viaje hacia sus objetivos de proyección en la WEB
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <i className="bx bx-star"></i>
                <h5>CALIDAD</h5>
                <p>de primera mano</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Nuestra estrategia se basa en tres (3) principios: Ofrecer a nuestros clientes un nivel de experiencia de primer nivel, ser la empresa más apreciada y respetada de nuestro sector y persegui un crecimiento sostenible y rentable "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i className="bx bx-wallet"></i>
                <h5>PRECIOS</h5>
                <p>sin competencia</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Según <strong>SHARK NERO</strong>, un sitio web no debe tener costo excesivo, sino que debe ser una inversión rentable. Es por eso que ayudamos a nuestros clientes a lograr sus objetivos en la mejor CALIDAD Y PRECIO "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={UsersImg} alt="Users" />
                <h5>EQUIPO</h5>
                <p>multidisciplinar</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " <strong>SHARK NERO</strong> cuenta con un equipo multidisciplinar, lo que garantiza a sus clientes la máxima eficeincia, confiabilidad y competencia. 
                <br />
                Gracias a nuestro equipo, en constante trabajo, somos capaces de dar soluciones concretas a las distintas solicitudes y requerimientos de nuestros clientes
                <br />
                Esto nos ayuda a garantizar a nuestros clientes un desempeño concreto y confiable también gracias a la posesión de habilidades blandas esenciales como habiliadades de comunicación, flexibilidad y resolución de problemas.
                "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i class="bx bxs-graduation"></i>
                <h5>EXPERIENCIA</h5>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " El corazón operativo de nuestra agencia es el equipo de desarrollo compuesto por programadores frontend y backend con habilidades para la creación de sitios web y e-commerce de todo tipo. Los mejores para transformar tus ideas en una estrategia de proyecto con herramientas efectivas y de alto rendimiento  "
              </p>
            </div>
          </div>
      </div>
      
      <Footer/>
      </>
    );
  }
}

export default About;