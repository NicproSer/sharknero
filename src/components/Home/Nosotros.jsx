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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto temporibus eligendi, magni nesciunt molestiae dolores non rem nihil aliquid at, cupiditate minus autem similique.
                </p>
                <a href="/about" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </div>
  )
}
