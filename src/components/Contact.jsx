import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";

// Los enlaces de contacto también vienen de los datos para poder actualizarlos juntos.
function Contact() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const copyFeedbackTimeout = useRef(null);

  useEffect(
    () => () => window.clearTimeout(copyFeedbackTimeout.current),
    [],
  );

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is unavailable.");
      }

      await navigator.clipboard.writeText(portfolioData.email);
      setCopyFeedback("¡Copiado!");
    } catch (error) {
      console.error("No se pudo copiar el correo al portapapeles.", error);
      setCopyFeedback("No se pudo copiar");
    }

    window.clearTimeout(copyFeedbackTimeout.current);
    copyFeedbackTimeout.current = window.setTimeout(
      () => setCopyFeedback(""),
      2000,
    );
  }

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
        <p className="contact-response-time">
          Respondo en menos de 24 hs — webs, sistemas a medida o automatizaciones.
        </p>
        <div className="contact-email-actions">
          <a
            className="button button-light"
            href={`mailto:${portfolioData.email}`}
          >
            {portfolioData.email} <span aria-hidden="true">↗</span>
          </a>
          <button
            className="copy-email-button"
            type="button"
            onClick={() => void copyEmail()}
            aria-label="Copiar correo al portapapeles"
            title="Copiar correo"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            >
              <rect x="8" y="8" width="12" height="13" rx="2" />
              <path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2" />
            </svg>
          </button>
          <span
            className={`copy-feedback ${copyFeedback === "No se pudo copiar" ? "copy-feedback--error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {copyFeedback}
          </span>
        </div>

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
