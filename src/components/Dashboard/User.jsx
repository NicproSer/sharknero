import React from 'react'
import Logo from '../../assets/LOGO.png'
import { Sidebar } from './Sidebar'
import { Preloader } from '../Preloader'
import "../../Dashboard.css"

export const User = () => {
  return (
    <>
       <Preloader />
        <div className="container">
            <Sidebar>
                <li>
                    <a href="">
                        <i className='bx bx-envelope'></i>
                        <span>Solicitudes</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-edit'></i>
                        <span>Crear Solicitud</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-briefcase-alt'></i>
                        <span>Servicios</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-purchase-tag'></i>
                        <span>Ticket de Soporte</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className='bx bx-log-out'></i>
                        <span>Salir</span>
                    </a>
                </li>
            </Sidebar>
        </div>
    </>
  )
}
