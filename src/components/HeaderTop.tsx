import "../css/headerTop.css";

// usando useState
import { useState } from "react";


export default function HeaderTop () {

    const [phone, setPhone] = useState(false);

    const funcPhone = () => {
        setPhone(!phone)
    }

    const textPhone: string = phone ? "946694407" : "Contáctame";

    return (
        <section className="header-top">
            <div className="contact-me"onClick={funcPhone} >{textPhone}</div>
            <ul className="social-networks">
                <li><a href="https://www.facebook.com/megaconstructores.pe" target="_blanck"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCAB76OR0jYOaMxKwYE_NvBQ" target="_blanck"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.instagram.com/megaconstructores.pe/" target="_blanck"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </section>
    );
}