const logger = require('../utils/logger');

// Por ahora solo registra el mensaje en consola.
// Acá se puede agregar envío de email (nodemailer) o guardado en BD.
const guardarMensaje = async ({ nombre, email, mensaje }) => {
  logger.info(`Nuevo mensaje de ${nombre} <${email}>: ${mensaje}`);
  return true;
};

module.exports = { guardarMensaje };
