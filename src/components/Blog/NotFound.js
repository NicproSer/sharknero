import React from "react";
import NotFoundImg from "../../assets/not_found.svg";

export const NotFound = () => {
  return (
    <div className="container" id="notFound">
      <figure>
        <img src={NotFoundImg} alt="Not Found" />
        <h1>Opps, hubo un error!</h1>
        <a href="/" className="btn btn-primary">
          Volver al inicio
        </a>
      </figure>
    </div>
  );
};
