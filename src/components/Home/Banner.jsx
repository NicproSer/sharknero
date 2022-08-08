import React from 'react'
import BannerImg from '../../assets/Banner.jpg'

export const Banner = () => {
  return (
    <div className='carousel' id='banner'>
        <div className='carousel-inner'>
        <img src={BannerImg} alt="Banner Shark Nero" className='d-block w-100' />
        <div className="carousel-caption d-none d-md-block">
            <h1>Shark Nero</h1>
            <h3>¡Proyectamos tus ideas en la web!</h3>
            <a href="/services" className='btn-white'>Saber más</a>
        </div>
        </div>
    </div>
  )
}
