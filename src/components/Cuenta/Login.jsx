import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "../Preloader";

class Login extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <div className="cuenta container" id="login">
          <form>
            <Link to="/">
              <i class="bx bx-chevron-left"></i> Regresar
            </Link>
            <h2>Iniciar Sesión</h2>
            <div className="form-group">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                name="user"
                placeholder="Usuario"
                className="form-control"
              />
              <small className="error-text">Introduce tu usuario</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>
                Si no tienes una cuenta puedes crearlo{" "}
                <a href="/register">Aquí</a>
              </p>
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
