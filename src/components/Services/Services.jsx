import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { ScrollButton } from "../ScrollButton";

class Services extends React.Component {
  render() {
    return (
      <>
      <Preloader/>
      <Navbar/>
      <div id="servicios" className="container">
      <h1>Servicios</h1>
      </div>
      <ScrollButton/>
      <Footer/>
      </>
    );
  }
}

export default Services;