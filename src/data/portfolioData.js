// Editá este archivo para actualizar los textos, enlaces y proyectos.
// Los componentes solo presentan estos datos; no hace falta cambiar su lógica.
import turnosYaPresentation from "../assets/turnosya-presentacion.mp4";

const linkedinUrl = "https://www.linkedin.com/in/valentin-caligiuri-fazio-124a8732a/";

export const portfolioData = {
  name: "Valentin Caligiuri Fazio",
  displayName: "MaKo",
  linkedinUrl,
  role: "Desarrollador Web & Automatizaciones",
  location: "Buenos Aires, Argentina",
  intro:
    "Creo webs, sistemas de gestión y automatizaciones simples que ahorran tiempo y ordenan procesos.",
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
  ],
  projects: [
    {
      id: 1,
      title: "TurnosYa — Sistema de reservas online",
      description:
        "Plataforma web para agendar turnos de forma automática, evitar superposiciones de horarios y reducir ausencias mediante recordatorios.",
      tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      videoUrl: turnosYaPresentation,
      style: "project-card--green",
    },
    {
      id: 2,
      title: "Presupuestador — Cotizaciones rápidas",
      description:
        "Herramienta web para importar catálogos, calcular presupuestos al instante y exportar versiones profesionales listas para enviar a clientes.",
      tags: ["Vue 3", "TypeScript", "Vite"],
      demoUrl: "https://valencaligiuri.github.io/presupuestador/",
      repositoryUrl: "https://github.com/valencaligiuri/presupuestador",
      style: "project-card--lavender",
    },
    {
      id: 3,
      title: "MTasks — Gestión operativa de tareas",
      description:
        "Aplicación full-stack con acceso protegido para organizar flujos de trabajo, asignar prioridades y seguir el avance diario de proyectos.",
      tags: ["Vue 3", "TypeScript", "Go", "SQLite"],
      repositoryUrl: "https://github.com/valencaligiuri/MTasks",
      style: "project-card--peach",
    },
  ],
};
