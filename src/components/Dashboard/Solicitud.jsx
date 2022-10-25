import React from "react";
import { Sidebar } from "./Sidebar";
import "../../Dashboard.css";

export const Solicitud = () => {
  return (
    <>
      <Sidebar>
        <li>
          <a href="/solicitudes">
            <i className="bx bx-envelope"></i>
            <br />
            <span>Solicitudes</span>
          </a>
        </li>
        <li>
          <a href="/crear-solicitud">
            <i className="bx bx-edit"></i>
            <br />
            <span>Crear Solicitud</span>
          </a>
        </li>
        <li>
          <a href="/servicios-user">
            <i className="bx bx-briefcase-alt"></i>
            <br />
            <span>Servicios</span>
          </a>
        </li>
        <li>
          <a href="/ticket-de-soporte">
            <i className="bx bx-purchase-tag"></i>
            <br />
            <span>Ticket de Soporte</span>
          </a>
        </li>
        <li>
          <a href="/logout">
            <i className="bx bx-log-out"></i>
            <br />
            <span>Salir</span>
          </a>
        </li>
      </Sidebar>
      <div className="interuser" id="solicitudUser">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Crear Solicitud</h1>
              <form>
                <div className="form-group">
                  <span>Nombre y Apellido</span>
                  <input
                    type="text"
                    placeholder="Nombre y Apellido"
                    className="form-control"
                    name="nombre"
                    id="solicitudName"
                  />
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="solicitudEmail"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <span>Asunto</span>
                  <input
                    type="text"
                    placeholder="Asunto"
                    className="form-control"
                    name="asunto"
                    id="soli"
                  />
                </div>
                <div className="form-group">
                  <span>Mensaje</span>
                  <textarea
                    className="form-control"
                    placeholder="Mensaje"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>
                <button className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
