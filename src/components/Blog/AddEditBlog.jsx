import React from "react";
import swal from "sweetalert";

export const AddEditBlog = () => {
  var getIn = prompt("Ingrese la contraseña para acceder a la sección");

  if (getIn === "123") {
    return (
      <div className="container">
        <h1>AddEditBlog</h1>
      </div>
    );
  } else {
    swal("Contraseña incorrecta", "", "error");
    return <div></div>;
  }
};
