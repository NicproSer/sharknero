import React from 'react'

export const Modal = ({children,estado, cambiarEstado}) => {
  return (
   <>
   {estado && 
   <div className="overlay">
     <div className="container-modal">
        <button onClick={() => cambiarEstado(false)}>
            <i className='bx bx-x'></i>
         </button>
       {children}
     </div>
   </div>
   }
   </>
  )
}
