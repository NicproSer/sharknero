import React from "react";

export const Form = () => {

  return (
    <div className="container" id="form">
      <div className="row">
        <div className="col-md-12">
          <div className="tabs">
            <div className="tab-container">
              <div className="tab" id="tab2">
                <a href="#tab2">Presupuesto</a>
                <div className="tab-content">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="name">Nombre*</label>
                      <input type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="email">Email*</label>
                      <input type="text" id="email" name="email"  className="form-control"/>
                      <label htmlFor="prioridad">Prioridad de Tiempo*</label>
                      <input type="text" id="prioridad" name="prioridad"  className="form-control"/>
                      <label htmlFor="experiencia">Nivel de Experiencia*</label>
                      <select name="experiencia" id="experiencia" className="form-control">
                        <option value="1">Facil</option>
                        <option value="2">Intermedio</option>
                      </select>
                      <label htmlFor="proceso">Idea Cómo hacer el Proceso</label>
                      <input name="proceso" id="proceso" className="form-control"/>
                      <label htmlFor="marca">Logo y Paleta de Colores *</label>
                      <input name="marca" id="marca" className="form-control"/>
                      <label htmlFor="message">Mensaje*</label>
                      <textarea id="message" name="message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </form>
                </div>
              </div>
              <div className="tab" id="tab1">
                <a href="#tab1">Mensaje</a>
                <div className="tab-content">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="name">Nombre*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="subjet">Asunto*</label>
                      <input type="text" id="subjet" name="subjet"  className="form-control" />
                      <label htmlFor="message">Mensaje*</label>
                      <textarea id="message" name="message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
