const logger = require('../utils/logger');
const { escaparHtml } = require('../utils/escapeHtml');

// Envía el mensaje del formulario por mail usando la API de Resend (HTTPS).
// No usamos SMTP porque Render bloquea esos puertos en el plan gratuito.
//
// Variables de entorno:
//   RESEND_API_KEY  -> clave de la API (la da Resend)
//   MAIL_TO         -> casilla que recibe las consultas
//   MAIL_FROM       -> (opcional) remitente; por defecto el de pruebas de Resend
const guardarMensaje = async ({ nombre, email, mensaje }) => {
  const { RESEND_API_KEY, MAIL_TO, MAIL_FROM } = process.env;

  // Si no está configurado (por ejemplo en tu PC), solo lo muestra en consola.
  if (!RESEND_API_KEY || !MAIL_TO) {
    logger.info(`[Envío de mail sin configurar] Mensaje de ${nombre} <${email}>: ${mensaje}`);
    return;
  }

  const nombreSeguro = nombre.replace(/[\r\n]+/g, ' ').trim();

  const respuesta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: MAIL_FROM || 'Soluciones Electrónicas <onboarding@resend.dev>',
      to: [MAIL_TO],
      reply_to: email, // al tocar "Responder" en Gmail, le contestás al visitante
      subject: `Nueva consulta de ${nombreSeguro}`,
      html: `
        <h2>Nueva consulta desde el sitio</h2>
        <p><strong>Nombre:</strong> ${escaparHtml(nombreSeguro)}</p>
        <p><strong>Email:</strong> ${escaparHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escaparHtml(mensaje).replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    throw new Error(`Resend respondió ${respuesta.status}: ${detalle}`);
  }

  logger.info(`Mail enviado a ${MAIL_TO} (consulta de ${nombreSeguro})`);
};

module.exports = { guardarMensaje };
