import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";

class About extends React.Component {
  render() {
    return (
      <>
      <Preloader/>
      <Navbar />
      <div className="container" id="about">
        <div className="row">
          <div className="col-md-12">
            <h1>About</h1>
            <p>SHARK NERO, le asegura la confidencialidad de sus datos personales y le garantiza que en ningún momento serán cedidos a terceras empresas
              ajenas a nuestra organización.</p>
              </div>
              </div>
              </div>
      <Footer/>
      </>
    );
  }
}

export default About;