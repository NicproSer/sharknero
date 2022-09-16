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
      <div className="interuser">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Crear Solicitud</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
