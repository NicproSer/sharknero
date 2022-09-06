import React from 'react'
import Logo from '../../assets/LOGO.png'
import { Sidebar } from './Sidebar'
import { Preloader } from '../Preloader'

export const User = () => {
  return (
    <>
       <Preloader />
        <div className="container">
            <Sidebar>
                <li>
                    <a href="">
                        <i class='bx bx-envelope'></i>
                        <span>Solicitudes</span>
                    </a>
                </li>
            </Sidebar>
        </div>
    </>
  )
}
