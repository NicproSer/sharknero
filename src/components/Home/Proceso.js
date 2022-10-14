import React from "react";
import LightBulb from "../../assets/Lightbulb.png";

export const Proceso = () => {
  return (
    <section id="trabajo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>PROCESO DE TRABAJO</h4>
            <p>Así es como hacemos realidad nuestros proyectos</p>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <img src={LightBulb} alt="" />
            <span>IDEAS</span>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <i className="bx bxs-paint"></i>
            <span>BOSQUEJO</span>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <i className="bx bx-palette"></i>
            <span>DISEÑO</span>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <i className="bx bx-code-alt"></i>
            <span>DESAROLLO</span>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <i className="bx bx-test-tube"></i>
            <span>PRUEBAS</span>
          </div>
          <div className="col-md-2">
            <div className="circulo" align="center"></div>
            <i className="bx bx-rocket"></i>
            <span>PRODUCCIÓN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
