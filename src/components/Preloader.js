import React from 'react'

export const Preloader = () => {

    setTimeout(() => {
        document.getElementById('preloader').classList.add("hidden");
    }, 2000);

  return (
    <div id='preloader'>
    </div>
  )
}
