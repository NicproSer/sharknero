import React from "react";
import '../../index.css';   
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { ScrollButton } from "../ScrollButton";

class Privacy extends React.Component{
    render(){
        return (
          <>
          <Preloader/>
            <Navbar />
            <div className="container" id="privacy">
              <div className="row">
                <div className="col-md-12">
                  <h1>Políticas de Privacidad</h1>
                  <p>SHARK NERO, le asegura la confidencialidad de sus datos personales y le garantiza que en ningún momento serán cedidos a terceras empresas 
                        ajenas a nuestra organización.</p>
                        <h3>Finalidad de recolección de datos.</h3>
                        <p>Los datos personales se recopilan, sujeto a su consentimiento libre y específico, para los fines que se indican a continuación:</p>
                        <br />
                        <p>1) Fines relacionados con las actividades institucionales o empresariales del cliente.</p>
                        <p>2) Fines estadísticos y para detectar el grado de satisfacción, comunicación comercial, incluso interactiva, también a través de herramientas telemáticas (por ejemplo, correo electrónico, SMS) y envío de material promocional-publicitario, también mediante el uso de redes sociales y plataformas similares.</p>
                        <br />
                        <p>Su consentimiento libre y específico es necesario para que sus datos personales puedan ser tratados para las finalidades indicadas anteriormente.</p>
                        <br />
                        <h2>Políticas de devolución</h2>
                        <p>El cliente tiene derecho a cancelar un proyecto bajo los siguientes términos y condiciones:</p>
                        <br />
                        <p>1) El cliente debe enviar un correo electrónico a la siguiente dirección atclient@sharknero.com explicando el motivo de la devolución.</p>
                        <p>2) El reembolso se realizará con una penalización del 20% del monto cancelado, debido al trabajo realizado hasta el momento de la solicitud.</p>
                        <p>3) El cliente podrá recibir su reembolso en 30 días hábiles. </p>
                        <br />
                        <p> Los motivos de la devolución pueden ser sólo los siguientes: </p>
                        <br />
                        <p>1.Demora en la entrega (con respecto a lo acordado en el presupuesto).</p>
                        <p>2. Demora en los desarrollos solicitados.</p>
                        <p>3. Malas prácticas al servicio ofrecido.</p>
                        <p>4. No se cumplen objetivos de implementación. </p>
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