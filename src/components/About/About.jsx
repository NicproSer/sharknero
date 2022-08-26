import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import UsersImg from "../../assets/UsersThree.png";

class About extends React.Component {
  render() {
    return (
      <>
      <Preloader/>
      <Navbar />
      <div className="container" id="about">
        <div className="row">
            <div className="col-md-12">
              <h1>Nosotros</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, laboriosam.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <i className="bx bx-star"></i>
                <h5>CALIDAD</h5>
                <p>de primera mano</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium magni modi, vitae consequatur, molestiae deserunt
                quidem corporis fugit officia cupiditate suscipit amet pariatur
                dolorum odio laboriosam laborum animi maiores voluptas! "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i className="bx bx-wallet"></i>
                <h5>PRECIOS</h5>
                <p>sin competencia</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis odio, molestiae corrupti quam sunt quos
                officia magni. Autem sequi ratione cupiditate quae deserunt hic
                cum. Quaerat fuga ea deserunt! "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={UsersImg} alt="Users" />
                <h5>EQUIPO</h5>
                <p>multidisciplinar</p>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis odio, molestiae corrupti quam sunt quos
                officia magni. Autem sequi ratione cupiditate quae deserunt hic
                cum. Quaerat fuga ea deserunt! "
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i class="bx bxs-graduation"></i>
                <h5>EXPERIENCIA</h5>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis odio, molestiae corrupti quam sunt quos
                officia magni. Autem sequi ratione cupiditate quae deserunt hic
                cum. Quaerat fuga ea deserunt! "
              </p>
            </div>
          </div>
      </div>
      <Footer/>
      </>
    );
  }
}

export default About;