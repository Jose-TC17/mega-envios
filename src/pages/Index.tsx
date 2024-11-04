import Footer from '../components/Footer'
import Header from '../components/Header'

import "../css/sectionIndex.css";

import sectionSends from "../data/SectionSends";

import imgLima from "../img/imgLima.jpg";
import imgArequipa from "../img/imgArequipa.jpg";
import imgCuzco from "../img/imgCuzco.jpg";
import imgAmazonas from "../img/imgAmazonas.jpg";

import banner from "../img/fondoMegaEnvios.png";
import { useState } from 'react';

import imgMapaLima from "../img/mapaLima.png"
import imgMapaLima2 from "../img/mapaLima2.png"


export default function Index() {

    const imgR: string[] = [imgLima, imgArequipa, imgCuzco, imgAmazonas];

    const [info, setInfo] = useState("Envíos");

    // modifica el handle clik para ver el boton que esta clickeando
    const handleClick = (newInfo: string) => {
      setInfo(newInfo);
    }

    const textMegaShipping = () => {
      return [`Mega Envíos ofrece un servicio de envíos confiable y eficiente, asegurando que sus productos lleguen de manera puntual y segura,
      el servicio de Mega Envíos es la opción para los que buscan una opción económica y accesible. 
      Entregas a todo Lima Metropolitana el mismo día a plazo de 24 horas, y entregas de los productos en provincia en plazo de 48 a 72 horas hábiles.
      `, 
      `Mega Envíos Express es un servicio para aquello que necesitan mayor rapidez, poniendo tu pedido en prioridad, 
      asegurando un mejor servicio en velocidad y eficiencia haciendo que sea la mejor opción para envios urgentes a Lima, entregando tu pedido en menos de 24 horas hábiles en todo Lima
      Metropolitana y entregas de los productos en provincia en plazo de 24 a 48 horas hábiles.
      `];
    }

   

    const [ text1, text2 ] = textMegaShipping()
    const infoPaf: string = info ===  "Envíos EXPRESS" ? text2 : text1;
     
    return (
        <>
            <Header />
            <section className="section">
            <figure className="banner">
              <img src={banner} alt="banner" />
            </figure>

        <h1 className="section-title">Envíos a Nivel Nacional</h1>
        <div className="container-note">
          <p className="section-p">
            <span>NOTA:</span> <br />
            Hola, Bienvenido estimado Cliente: <br />
            En esta presentación, te compartimos como realizamos nuestros envíos
            a Nivel Nacional para poder ofrecerte un mejor servicio, que sea
            confiable, rapido y accesible.
          </p>
        </div>
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
        {sectionSends.map((element, index) => (
          <div className={element[0]} key={index}>
            <h3>Mega <span>{element[1]}</span></h3>
            <figure className="sectionTwo-figure">
              <img
                className="sectionTwo-img"
                src={element[2]}
                alt="imagen de los mapas relacionados"
              />
            </figure>
            <button className={["sectionTwo-a",`${element[3]}`].join(" ")} onClick={() => handleClick(`${element[1]}`)} >
              <span>Más información</span>
            </button>
          </div>
        ))}
      </section>
      <section className="section-info">
        <div className="container-section-info">
          <h3 className='title-info'>Detalles de <b>Mega</b> <span>{info}</span></h3>
          <p className='paf-info'>{infoPaf}</p>
        </div>
        <div className="container-images-info">
          <figure>
            <img src={imgMapaLima} alt="" />
          </figure>
          <figure>
            <img src={imgMapaLima2} alt="" />
          </figure>
        </div>
      </section>
      <Footer/>
        </>
    )
}