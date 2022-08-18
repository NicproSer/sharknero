import React from "react";
import { Preloader } from "../Preloader";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

class Terms extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div className="container" id="terms"></div>
        <Footer />
      </>
    );
  }
}