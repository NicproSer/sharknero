import React from "react";
import BannerImg from "../../assets/Banner.jpg";

export const Banner = () => {
  return (
    <section id="banner">
      <div
        id="carouselExampleWeb"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={BannerImg}
              className="d-block w-100"
              alt="Shark Nero Web"
            />
            <div className="carousel-caption d-md-block">
              <h1>Shark Nero</h1>
              <p>¡Proyectamos tus ideas en la web!</p>
              <a href="/services" className="btn-white">
                Saber más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
