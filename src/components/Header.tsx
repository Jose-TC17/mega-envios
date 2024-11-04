import { useEffect, useState } from "react";
import "../css/header.css";

// importando el logo de mega envios
import imgMegaEnvios from "../img/logoME.png";
import HeaderTop from "./HeaderTop";

export default function Header() {
    const [textH, setTextH] = useState<string>(() => window.innerWidth > 600 ? "Ir a Mega Constructores" : "🌐")

    useEffect(()=>{
        const handleResize = () => {
            const verify = window.innerWidth > 600 ? "Ir a Mega Constructores" : "🌐";
            setTextH(verify);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <>
        <HeaderTop />
        <header className="header">
            <picture className="header-picture">
                <img src={imgMegaEnvios} alt="logo de mega envios" className="header-logo" />
            </picture>
            <a href="https://ct-megaconstructores.bsalemarket.com/" className="header-link-home" title="Ir a Megaconstructores">{textH}</a>
        </header>
        </>
    )
}