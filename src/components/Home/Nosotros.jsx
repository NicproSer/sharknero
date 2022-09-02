import React from 'react'
import Logo from '../../assets/LOGO.png'

export const Nosotros = () => {
  return (
    <div className='container' id='nosotros'>
        <div className="row">
            <div className="col-md-12" align="center">
                <img src={Logo} alt="Logo" className="img-fluid" width={80}/>
                <h2>Nostros</h2>
                <p>
                  SHARK NERO posee una columna de 4 bloques que le dan proporcionan la sólidez necesaria para acompañar a los clientes en el viaje de proyección en la WEB
                </p>
                <a href="/about" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </div>
  )
}
