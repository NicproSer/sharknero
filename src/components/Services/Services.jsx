import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { ScrollButton } from "../ScrollButton";

class Services extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div id="servicios" className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Servicios</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="card mb-5 shadow card-price">
                <div className="card-header">
                  <h2>Página Web</h2>
                  <h3>Desde 125$</h3>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </>
    );
  }
}

export default Services;
