import React from 'react'
import Logo from '../../assets/LOGO.png'
import { Sidebar } from './Sidebar'
import { Preloader } from '../Preloader'
import "../../Dashboard.css"

export const User = () => {
  return (
    <>
       <Preloader />
        <div>
            <Sidebar>
                <li>
                    <a href="">
                        <i className='bx bx-envelope'></i>
                        <br />
                        <span>Solicitudes</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-edit'></i>
                        <br />
                        <span>Crear Solicitud</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-briefcase-alt'></i>
                        <br />
                        <span>Servicios</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-purchase-tag'></i>
                        <br />
                        <span>Ticket de Soporte</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-log-out'></i>
                        <br />
                        <span>Salir</span>
                    </a>
                </li>
            </Sidebar>
            <div className="interuser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Bienvenido USERNAME</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
