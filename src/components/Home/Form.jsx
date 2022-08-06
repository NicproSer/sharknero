import React from "react";

export const Form = () => {
  return (
    <div className="container" id="form">
      <div className="row">
        <div className="col-md-12">
          <div className="tabs">
            <div className="tab-container">
              <div className="tab" id="tab2">
                <a href="#tab2">Mensaje</a>
                <div className="tab-content">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="name">Nombre*</label>
                      <input type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="email">Email*</label>
                      <input type="text" id="email" name="email"  className="form-control"/>
                      <label htmlFor="subjet">Asunto*</label>
                      <input type="text" id="subjet" name="subjet"  className="form-control"/>
                      <label htmlFor="message">Mensaje*</label>
                      <textarea id="message" name="message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </form>
                </div>
              </div>
              <div className="tab" id="tab1">
                <a href="#tab1">Presupuesto</a>
                <div className="tab-content">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="name">Nmbe*</label>
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
