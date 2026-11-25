import { portfolioData } from "../data/portfolioData";

// map() genera una tarjeta por proyecto sin duplicar la estructura del JSX.
function Projects() {
  return (
    <section className="projects container" id="proyectos">
      <div className="section-heading">
        <div>
          <p className="eyebrow section-kicker">Portafolio</p>
          <h2>Proyectos <span>seleccionados.</span></h2>
        </div>
        <p className="section-aside">Sistemas web diseñados para ahorrar tiempo y ordenar procesos.</p>
      </div>

      <div className="project-grid">
        {portfolioData.projects.map((project, index) => (
          <article
            className={`project-card ${project.style}`}
            key={project.id}
          >
            <div className="project-visual">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-visual-mark" aria-hidden="true">
                ✳
              </span>
              <span className="project-visual-title">{project.title}</span>
              <span className="project-visual-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="Tecnologías utilizadas">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Ver demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noreferrer">
                    Ver presentación <span aria-hidden="true">↗</span>
                  </a>
                )}
                {!project.demoUrl && !project.videoUrl && project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver repositorio <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
