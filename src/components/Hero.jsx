import { portfolioData } from "../data/portfolioData";

// La presentación principal toma el nombre y los textos desde los datos compartidos.
function Hero() {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {portfolioData.availability}
        </p>

        <h1>
          Hola, soy
          <br />
          <span>{portfolioData.displayName}.</span>
        </h1>

        <p className="hero-role">{portfolioData.role}</p>
        <p className="hero-intro">{portfolioData.intro}</p>

        <div className="hero-actions">
          <a className="button button-dark" href="#proyectos">
            Mirá mis proyectos <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href={`mailto:${portfolioData.email}`}>
            Escribime <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="hero-location">
          <span aria-hidden="true">⌖</span> {portfolioData.location}
        </p>
      </div>

      <div className="hero-art" aria-label="Ilustración decorativa" role="img">
        <div className="art-sun" />
        <div className="art-orbit art-orbit-one" />
        <div className="art-orbit art-orbit-two" />
        <div className="art-card">
          <span className="art-card-label">CREANDO EN LA WEB</span>
          <span className="art-monogram" aria-hidden="true">
            {portfolioData.displayName.slice(0, 1)}
          </span>
          <span className="art-card-caption">ideas que toman forma</span>
        </div>
        <span className="art-spark art-spark-one" aria-hidden="true">✳</span>
        <span className="art-spark art-spark-two" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}

export default Hero;
