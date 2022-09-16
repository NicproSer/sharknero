import React from "react";
import { Sidebar } from "./Sidebar";
import "../../Dashboard.css";

export const TicketUser = () => {
  return (
    <>
      <Sidebar>
        <li>
          <a href="/">
            <i className="bx bx-envelope"></i>
            <br />
            <span>Solicitudes</span>
          </a>
        </li>
        <li>
          <a href="/user/crear-solicitud">
            <i className="bx bx-edit"></i>
            <br />
            <span>Crear Solicitud</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-briefcase-alt"></i>
            <br />
            <span>Servicios</span>
          </a>
        </li>
        <li>
          <a href="/user/crear-ticket">
            <i className="bx bx-purchase-tag"></i>
            <br />
            <span>Ticket de Soporte</span>
          </a>
        </li>
        <li>
          <a href="/">
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
              <h1>Crear Ticket de Soporte</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
