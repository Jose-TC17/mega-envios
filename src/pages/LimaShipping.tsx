import Header from '../components/Header'
import Section from '../components/Section'
import "../css/limaShipping.css"
// importando el data de los distritos de lima
import { dataLima } from '../data/dataLima'

export default function LimaShipping() {
    return (
        <>
            <Header />
            <Section title='Envíos Lima - Callao' placeholder='Buscar Distrito...'>
                <>
                    <div className="container-district">
                        {dataLima.map((element) => (
                        <>
                            <div className="district" key={element.id}>
                                <h3 className='title-district'>Envíos a {element.title}</h3>
                                <p className='paf-district'>
                                    {element.description}
                                </p>
                            </div>
                            <hr className='hr-district' />
                        </>
                        ))}
                    </div>
                </>
            </Section>
        </>
    )
}