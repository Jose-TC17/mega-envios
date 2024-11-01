import "../css/header.css";

// importando el logo de mega envios
import imgMegaEnvios from "../img/logoME.png";
import HeaderTop from "./HeaderTop";

export default function Header() {
    return (
        <>
        <HeaderTop />
        <header className="header">
            <picture className="header-picture">
                <img src={imgMegaEnvios} alt="logo de mega envios" className="header-logo" />
            </picture>
            <a href="https://ct-megaconstructores.bsalemarket.com/" className="header-link-home">Ir a Mega Constructores</a>
        </header>
        </>
    )
}