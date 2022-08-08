
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
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="name">Nombre*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="email">Email*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="prioridad">Prioridad de Tiempo*</label>
                        <select
                          name="prioridad"
                          id="prioridad"
                          className="form-control"
                        >
                          <option value="">Seleccione</option>
                          <option value="a">1</option>
                          <option value="b">2</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="experiencia">
                          Nivel de Experiencia*
                        </label>
                        <select
                          name="experiencia"
                          id="experiencia"
                          className="form-control"
                        >
                          <option value="1">Facil</option>
                          <option value="2">Intermedio</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="proceso">
                          Idea Cómo hacer el Proceso
                        </label>
                        <select
                          name="proceso"
                          id="proceso"
                          className="form-control"
                        >
                          <option value="">Seleccione</option>
                          <option value="a">1</option>
                          <option value="b">2</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="marca">
                          Logo y Paleta de Colores *
                        </label>
                        <input
                          name="marca"
                          id="marca"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message">Mensaje*</label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
              <div className="tab" id="tab1">
                <a href="#tab1">Mensaje</a>
                <div className="tab-content">
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="name_contact">Nombre *</label>
                        <input
                          type="text"
                          name="namecontact"
                          id="name_contact"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="name_contact">Email *</label>
                        <input
                          type="email"
                          name="emailcontact"
                          id="email_contact"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="subject_contact">Asunto *</label>
                        <input
                          type="text"
                          name="subjectcontact"
                          id="subject_contact"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message_contact">Mensaje *</label>
                        <textarea className="form-control" rows={5}></textarea>
                      </div>
                    </div>
                    <br />
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
