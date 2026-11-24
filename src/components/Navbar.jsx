import { portfolioData } from "../data/portfolioData";

// La navegación usa anclas para llevar a las secciones de esta misma página.
function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegación principal">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">
          {portfolioData.displayName}
          <span className="wordmark-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a
            className="nav-linkedin"
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a className="nav-contact" href="#contacto">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
