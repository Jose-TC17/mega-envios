import Footer from '../components/Footer'
import Header from '../components/Header'

import "../css/sectionIndex.css";

import sectionSends from "../data/SectionSends";

import imgLima from "../img/imgLima.jpg";
import imgArequipa from "../img/imgArequipa.jpg";
import imgCuzco from "../img/imgCuzco.jpg";
import imgAmazonas from "../img/imgAmazonas.jpg";

import banner from "../img/fondoMegaEnvios.png";


export default function Index() {

    const imgR: string[] = [imgLima, imgArequipa, imgCuzco, imgAmazonas];

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
            Hola, Bienvenido estimado amigo: <br />
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
            <a className="sectionTwo-a" href={element[3]}>
              <span>Más información</span>
            </a>
          </div>
        ))}
      </section>
            <Footer/>
        </>
    )
}