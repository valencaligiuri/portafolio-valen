import { portfolioData } from "../data/portfolioData";

// Los enlaces de contacto también vienen de los datos para poder actualizarlos juntos.
function Contact() {
  return (
    <section className="contact section-shell" id="contacto">
      <div className="container contact-inner">
        <p className="eyebrow section-kicker">¿TENÉS UNA IDEA?</p>
        <h2>
          Hagamos algo
          <br />
          <span>bueno juntos.</span>
        </h2>
        <p className="contact-copy">
          Siempre tengo lugar para una buena conversación y un proyecto nuevo.
        </p>
        <a className="button button-light" href={`mailto:${portfolioData.email}`}>
          {portfolioData.email} <span aria-hidden="true">↗</span>
        </a>

        <div className="social-links">
          {portfolioData.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
