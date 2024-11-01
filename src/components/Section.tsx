import "../css/section.css";

type Props = {
  title: string;
  placeholder: string;
  children: React.ReactElement;
}

export default function Section(props : Props) {
  const { title, children, placeholder } = props;
  return (
    <section className="sections">
        <div className="container-top">
          {/* enlace de regresar */}
          <a href="/" className="link-index">Regresar</a>
          {/* titulo */}
          <h1 className="section-title">{title}</h1>
        </div>
        <div className="container">
          <div className="content-text">
            <div className="search-content">
              {/* buscador de palabras */}
              <label className="search-text">Buscar</label>
              <input type="text" className="search" id="search-input" placeholder={placeholder} />
            </div>
            <div className="container-elements">
              {children}
            </div>
          </div>
        </div>
    </section>
  );
}
