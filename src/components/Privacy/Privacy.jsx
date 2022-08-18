import React from "react";
import "../../index.css";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { ScrollButton } from "../ScrollButton";

class Privacy extends React.Component {
  render() {
    return (
      <>
        <Preloader />
        <Navbar />
        <div className="container" id="privacy">
          <div className="row">
            <div className="col-md-12">
              <h1>Políticas de Privacidad</h1>
              <p>
                Esta Política de privacidad describe el modo en el que{" "}
                <strong>Shark Nero</strong> usa y protege la información que es
                proporcionada por sus usuarios al momento de usar el sitio web
              </p>
              <p>
                <strong>SHARK NERO</strong>, le asegura la confidencialidad de
                sus datos personales y le garantiza que en ningún momento serán
                cedidos a terceras empresas ajenas a nuestra organización.
              </p>
              <br />
              <h3>Finalidad de recolección de datos.</h3>
              <p>
                Shark Nero podrá recoger información personal como por ejemplo:
              </p>
              <ul>
                <li>
                  <strong>Nombre y Apellido</strong>
                </li>
                <li>
                  <strong>Correo Electrónico</strong>
                </li>
                <li>
                  <strong>Teléfono</strong>
                </li>
                <li>
                  <strong>Dirección</strong>
                </li>
              </ul>
              <p>
                Los datos personales se recopilan, sujeto a su consentimiento
                libre y específico, para los fines que se indican a
                continuación:
              </p>
              <br />
              <p>
                1) Fines relacionados con las actividades institucionales o
                empresariales del cliente.
              </p>
              <p>
                2) Fines estadísticos y para detectar el grado de satisfacción,
                comunicación comercial, incluso interactiva, también a través de
                herramientas telemáticas (por ejemplo, correo electrónico, SMS)
                y envío de material promocional-publicitario, también mediante
                el uso de redes sociales y plataformas similares.
              </p>
              <br />
              <p>
                Su consentimiento libre y específico es necesario para que sus
                datos personales puedan ser tratados para las finalidades
                indicadas anteriormente.
              </p>
              <br />
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </>
    );
  }
}

export default Privacy;
