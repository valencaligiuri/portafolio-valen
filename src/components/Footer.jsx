import { portfolioData } from "../data/portfolioData";

// Se calcula fuera del render para que el componente solo presente el valor.
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer container">
      <a className="wordmark" href="#inicio">
        {portfolioData.name}
        <span className="wordmark-dot">.</span>
      </a>
      <p>Diseñado y construido con cariño · {currentYear}</p>
      <a className="back-to-top" href="#inicio">
        Volver arriba ↑
      </a>
    </footer>
  );
}

export default Footer;
