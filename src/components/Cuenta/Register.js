import React from "react";
import { Preloader } from "../Preloader";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <div className="cuenta container" id="register">
          <form>
            <Link to="/">
              <i class="bx bx-chevron-left"></i> Regresar
            </Link>
            <h2>Registrarse</h2>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="Apellido"
                placeholder="Apellido"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="DNI">Documento de Identidad</label>
              <input
                type="text"
                name="DNI"
                id="DNI"
                placeholder="Documento de Identidad"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="demo@email.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Usuario"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input type="checkbox" name="terms" id="terms" required />
              <label htmlFor="terms">
                Acepta los <a href="/terms">Términos y Condiciones</a> de Shark
                Nero
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarme
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
