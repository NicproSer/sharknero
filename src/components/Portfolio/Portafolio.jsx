import React, { useState }  from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { Modal } from "./Modal";

export const Portfolio = () => {
     const [estadoModal1, cambiarEstado1] = useState(false)
        return (
            <>
            <Preloader/>
             <Navbar/>
            <div id="portafolio" className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Portafolio</h1>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus dolor eos dicta reprehenderit illo neque reiciendis. In molestias non vel iste fugiat assumenda possimus corrupti.</span>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <figure>
                                <img src="https://i.ibb.co/4WzX70W/circulo.png" alt="Web" className="w-100"/>
                            </figure>
                            <div className="card-body">
                                <div className="text">
                                  <h2>Proyecto 1</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => cambiarEstadoModal1(!estadoModal1)}
                                >
                                    Ver
                                </button>
                                </div>
                            </div>
                        </div>
            <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
              <div className="contenido">
                <img
                  src="https://i.ibb.co/4WzX70W/circulo.png"
                  alt="circulo"
                  border="0"
                  className="w-100"
                />
              </div>
            </Modal>
        </div>

                </div>
            </div>
            <Footer/>
            </>
        )
}