const message =
  "¡Hola! Me interesa contratarte para crear una landing page o una página web. ¿Podrías pasarme una cotización?";

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/5491151458255?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
        <path d="M8.2 7.7a.8.8 0 0 1 1.3-.4l1.2 1.5a.8.8 0 0 1-.1 1.1l-.5.5a8.3 8.3 0 0 0 3.5 3.5l.5-.5a.8.8 0 0 1 1.1-.1l1.5 1.2a.8.8 0 0 1-.4 1.3 3.2 3.2 0 0 1-2 .1 10.1 10.1 0 0 1-6.3-6.3 3.2 3.2 0 0 1 .1-2Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
