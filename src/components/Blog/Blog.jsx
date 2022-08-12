import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />

        <Footer />
      </>
    );
  }
}

export default Blogs;
