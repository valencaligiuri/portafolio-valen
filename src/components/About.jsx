import { portfolioData } from "../data/portfolioData";

// Se puede cambiar la biografía y las habilidades editando solo portfolioData.
function About() {
  return (
    <section className="about section-shell" id="sobre-mi">
      <div className="container about-grid">
        <div>
          <p className="eyebrow section-kicker">UN POCO SOBRE MÍ</p>
          <h2>
            Curiosidad,
            <br />
            café y <span>buen código.</span>
          </h2>
        </div>

        <div className="about-details">
          <p className="body-copy">{portfolioData.about}</p>
          <h3>Herramientas que uso</h3>
          {/* map crea una opción por habilidad; la key ayuda a React a reconocerla. */}
          <ul className="skill-list">
            {portfolioData.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
