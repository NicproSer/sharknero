import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Preloader } from "../Preloader";

class Cuenta extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div className="container" id="cuenta">
          <div className="row">
            <div className="col-md-12">
              <h1>Inicia Sesión o Registrate</h1>
              <h3>
                Para acceder a tu cuenta debes{" "}
                <a href="/login">iniciar Sesión</a> o{" "}
                <a href="/register">registrate</a>
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cuenta;
