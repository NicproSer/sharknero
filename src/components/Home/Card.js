import React from "react";
import UsersImg from "../../assets/UsersThree.png";

export const Card = () => {
  return (
    <div id="elegirnos">
      <div className="container">
        <h2>¿POR QUÉ ELEGIR SHARK NERO?</h2>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <i className="bx bx-star"></i>
              <h5>CALIDAD</h5>
              <p>de primera en cada servicio</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <i className="bx bx-wallet"></i>
              <h5>PRECIOS</h5>
              <p>sin competencia</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={UsersImg} alt="Users" />
              <h5>EQUIPO</h5>
              <p>multidisciplinar</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <i className="bx bxs-graduation"></i>
              <h5>EXPERIENCIA</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
