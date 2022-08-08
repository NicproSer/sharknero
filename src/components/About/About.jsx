import React from "react";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";

class About extends React.Component {
  render() {
    return (
      <>
      <Preloader/>
      <Navbar />
      </>
    );
  }
}

export default About;