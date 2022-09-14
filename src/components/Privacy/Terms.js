import React from "react";
import "../../index.css";
import { Preloader } from "../Preloader";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

class Terms extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div className="container" id="terms">
          <div className="row">
            <div className="col-md-12">
              <h1>Términos Y Condiciones</h1>

              <h4>Información Relevante</h4>
              <p>
                Es importante que lea estos términos y condiciones de uso antes
                de usar nuestro sitio web. El uso de nuestros servicios
                implicará que usted ha leído y aceptado los términos y
                condiciones de uso en el presente documento.
              </p>
            </div>
            <h4>Políticas de Devolución</h4>
            <p>
              El cliente tiene derecho a cancelar un proyecto bajo los
              siguientes términos y condiciones:
            </p>
            <br />
            <p>
              1) El cliente debe enviar un correo electrónico a la siguiente
              dirección atclient@sharknero.com explicando el motivo de la
              devolución.
            </p>
            <p>
              2) El reembolso se realizará con una penalización del 20% del
              monto cancelado, debido al trabajo realizado hasta el momento de
              la solicitud.
            </p>
            <p>3) El cliente podrá recibir su reembolso en 30 días hábiles. </p>
            <br />
            <p>
              {" "}
              Los motivos de la devolución pueden ser sólo los siguientes:{" "}
            </p>
            <br />
            <p>
              1.Demora en la entrega (con respecto a lo acordado en el
              presupuesto).
            </p>
            <p>2. Demora en los desarrollos solicitados.</p>
            <p>3. Malas prácticas al servicio ofrecido.</p>
            <p>4. No se cumplen objetivos de implementación. </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Terms;
