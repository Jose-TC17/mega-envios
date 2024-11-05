import Footer from '../components/Footer'
import Header from '../components/Header'

import "../css/sectionIndex.css";

import sectionSends from "../data/SectionSends";

import imgLima from "../img/imgLima.jpg";
import imgArequipa from "../img/imgArequipa.jpg";
import imgCuzco from "../img/imgCuzco.jpg";
import imgAmazonas from "../img/imgAmazonas.jpg";
import imgSanMartin from "../img/imgSanMartin.jpg";

import banner from "../img/fondoMegaEnvios.png";

import animationGif from "../img/animation-gif.gif";

import { useState } from 'react';


export default function Index() {

    const imgR: string[] = [imgLima, imgArequipa, imgCuzco, imgAmazonas, imgSanMartin];

    const [info, setInfo] = useState(false);

    const handleClick = () => {
      setInfo(true)
    }

    const handleClickReturn = () => {
        setInfo(false)
    }

    const verifyClass: string = info ? "active" : "";
    const verifyClassR: string = info ? "display-none" : "active";

    return (
        <>
            <Header />
            <section className="section">
            <figure className="banner">
              <img src={banner} alt="banner" />
            </figure>
        <div className="slider-images">
            <div className="container-imgs">
                {imgR.map((element, index)=>(
                    <figure className="st-figure" key={index}>
                        <img src={element} alt="imagen de ciudades y lugares" />
                    </figure>
                ))}
                {imgR.map((element, index)=>(
                    <figure className="st-figure" key={index}>
                        <img src={element} alt="imagen de ciudades y lugares" />
                    </figure>
                ))}
            </div>
        </div>
      </section>
      <section className="section-two">
        <div className={["container-details details-megaShipping", `${verifyClass}`].join(" ")}>
            <h3>Detalles sobre <b>MEGA <span>ENVÍOS</span></b></h3>
            <p className='paf-details-megaShipping'>
              Aseguramos que tus 
              productos lleguen de manera puntual y segura, mejorando la eficiencia
              de las entregas de tus pedidos. <br />
              Envíamos a toda <b>Lima Metropolitana</b> y distritos seleccionados entregando tu 
              producto en menos de 24 horas hábiles; y envíos a todo el <b>Perú </b>
              en un plazo de 24 a 48 horas hábiles. <br />
              <i><b>Gracias por su atención...</b></i>
            </p>
            <img className='animation-gif' src={animationGif} alt="" />
            <button className="clickReturn" onClick={handleClickReturn} >
                <span>Volver</span>
            </button>
        </div>
        {sectionSends.map((element, index) => (
          <div className={[element[0], verifyClassR].join(" ")} key={index}>
            <h3>Mega <span>{element[1]}</span></h3>
            <figure className="sectionTwo-figure">
              <img
                className="sectionTwo-img"
                src={element[2]}
                alt="imagen de los mapas relacionados"
              />
            </figure>
            <button className="sectionTwo-a" onClick={handleClick} >
              <span>Más información</span>
            </button>
          </div>
        ))}
          <ul className="section-list">
            <h3>Te Ofrecemos:</h3>
            <div className="list">
              <li>Responsabilidad</li>
              <li>Eficacia</li>
              <li>Envíos Rápidos</li>
              <li>Seguridad</li>
              <li>Seguimiento</li>
              <li>Compromiso</li>
              <li>Soporte</li>
            </div>
          </ul>
      </section>
      <Footer/>
        </>
    )
}