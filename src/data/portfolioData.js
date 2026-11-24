// Editá este archivo para actualizar los textos, enlaces y proyectos.
// Los componentes solo presentan estos datos; no hace falta cambiar su lógica.
import turnosYaPresentation from "../assets/turnosya-presentacion.mp4";

const linkedinUrl = "https://www.linkedin.com/in/valentin-caligiuri-fazio-124a8732a/";

export const portfolioData = {
  name: "Valentin Caligiuri Fazio",
  displayName: "MaKo",
  linkedinUrl,
  role: "Desarrollador frontend",
  location: "Buenos Aires, Argentina",
  intro:
    "Transformo ideas en experiencias digitales simples, cuidadas y fáciles de usar.",
  about:
    "Me gusta crear cosas para internet y resolver problemas con diseño y código. " +
    "Estoy aprendiendo y construyendo proyectos para convertir cada idea en algo real.",
  email: "valencaligiuri06@gmail.com",
  availability: "Disponible para nuevos proyectos",
  skills: [
    "JavaScript",
    "React",
    "Vue 3",
    "TypeScript",
    "Go",
    "Python",
    "Git",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/valencaligiuri" },
    { label: "LinkedIn", href: linkedinUrl },
  ],
  projects: [
    {
      id: 1,
      number: "01",
      title: "MTasks — gestor de tareas",
      description:
        "Aplicación full-stack para organizar tareas, seguir el progreso y proteger el acceso con contraseña.",
      tags: ["Vue 3", "TypeScript", "Go", "SQLite"],
      repositoryUrl: "https://github.com/valencaligiuri/MTasks",
      style: "project-card--green",
    },
    {
      id: 2,
      number: "02",
      title: "SScreen — pantalla en red local",
      description:
        "Herramienta para transmitir la pantalla en una red local, construida con Flask y OpenCV.",
      tags: ["Python", "Flask", "OpenCV"],
      repositoryUrl: "https://github.com/valencaligiuri/SScreen",
      style: "project-card--lavender",
    },
    {
      id: 3,
      number: "03",
      title: "Presupuestador — presupuestos y cotizaciones",
      description:
        "Aplicación para importar catálogos, preparar presupuestos y exportar versiones para clientes y uso interno.",
      tags: ["Vue 3", "TypeScript", "Vite"],
      demoUrl: "https://valencaligiuri.github.io/presupuestador/",
      repositoryUrl: "https://github.com/valencaligiuri/presupuestador",
      style: "project-card--peach",
    },
    {
      id: 4,
      number: "04",
      title: "TurnosYa — sistema de turnos",
      description:
        "Sistema de reservas para un estudio odontológico: permite elegir servicios y horarios, y administrar turnos desde un panel protegido.",
      tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      videoUrl: turnosYaPresentation,
      style: "project-card--green",
    },
  ],
};
