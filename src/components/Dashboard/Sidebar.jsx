import React from 'react'
import Logo from '../../assets/LOGO.png'
import '../Dashboard.css'

export const Sidebar = ({children}) => {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <a href="">
                    <img src={Logo} alt="Logo" width={80}/>
                </a>
            </li>
            {children}
        </ul>
    </div>
  )
}
