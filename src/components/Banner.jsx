import React from 'react'
import BannerImg from '../assets/bannerbaby 1.jpg'
import BannerImg2 from '../assets/ropabebe.jpg'


export const Banner = () => {
  return (
    <section id="banner">
     <div id="carouselExampleWeb" className='carousel slide' data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval='10000'>
          <img src={BannerImg} className='d-block w-100' alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Todo lo que tu baby genio necesita</h1>
            <p>Encuentra diversos productos para tu baby genio y regalale algo que lo haga feliz</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={BannerImg2} className='d-block w-100' alt="" />
      </div>
     </div>
    </section>
  );
}
