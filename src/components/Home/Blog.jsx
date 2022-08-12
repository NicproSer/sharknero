import React from "react";
import WebImg from "../../assets/Web.png";
import WebImg2 from "../../assets/Para-Que-una-Web.jpg";
import WebImg3 from "../../assets/que-es-un-hosting.png";

export const Blog = () => {
  return (
    <div id="blog" className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Blog</h2>
          <p>
            En Shark Nero, estamos profundamente interesados en nuestros
            clientes, es por eso que los invitamos a visitar nuestro
            <br />
            blog donde podrán aclarar sus dudas y conocer la respuesta a las
            preguntas más frecuentes
          </p>
          <a href="/blog" className="btn-white">
            Saber más
          </a>
        </div>
        <div className="row" id="posts">
          <div className="col-md-4">
            <article>
              <img src={WebImg} alt="¿Por qué tu negocio necesita una web?" />
              <h3>¿Por qué tu negocio necesita una web?</h3>
              <span className="fecha">05/08/2022</span>
              <p>
                Porque permite que quienes lo visitan se hagan una idea de tu
                negocio o proyecto
              </p>
              <a href="/" className="btn btn-primary">
                Leer más
              </a>
            </article>
          </div>
          <div className="col-md-4">
            <article>
              <img src={WebImg2} alt="¿Para qué quiero una página web?" />
              <h3>¿Y para qué quiero una página web?</h3>
              <span>05/08/2022</span>
              <p>
                Puede que tengas duda sobre que beneficios te puede le puede
                brindar una pagina web a tu negocia para aclarar esa duda esta
                esta pubicacion.
              </p>
              <a href="/post/1" className="btn btn-primary">
                Leer más
              </a>
            </article>
          </div>
          <div className="col-md-4">
            <article>
              <img src={WebImg3} alt="¿Qué es un hosting?" />
              <h3>¿Qué es un hosting?</h3>
              <span>05/08/2022</span>
              <p>
                Un hosting es una plataforma que te permite almacenar tus
                archivos en un servidor que te permita acceder a ellos desde
                cualquier lugar.
              </p>
              <a href="/" className="btn btn-primary">
                Leer más
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
