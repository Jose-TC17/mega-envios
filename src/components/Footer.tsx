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
            <label className="footer-label">Creado por Corporación Mega Constructores © <span>{year}</span></label>
        </footer>

    )
}