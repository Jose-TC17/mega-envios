import { useEffect, useState} from "react"

import "../css/footer.css";

export default function Footer (){

    const [year, setYear] = useState<number>();
    useEffect(()=>{
        const date = new Date();
        setYear(date.getFullYear())
    })
    
    return (
        <footer className="footer">
            <label className="footer-label">Creado por Corporación Mega Constructores</label>
            <label className="footer-copy">copyright © <span>{year}</span></label>
            <ul className="social-network-footer">
                <li><a className="facebook" target="_blank" href="https://www.facebook.com/megaconstructores.pe"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a className="youtube" target="_blank" href="https://www.youtube.com/channel/UCAB76OR0jYOaMxKwYE_NvBQ"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a className="instagram" target="_blank" href="https://www.instagram.com/megaconstructores.pe/"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </footer>

    )
}