const { validarContacto } = require('../utils/validators');
const contactoService = require('../services/contactoService');
const logger = require('../utils/logger');

const mostrarFormulario = (req, res) => {
  res.render('contacto', { titulo: 'Contacto', errores: {}, datos: {}, enviado: false });
};

const enviarFormulario = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const errores = validarContacto({ nombre, email, mensaje });

  if (Object.keys(errores).length > 0) {
    return res.status(400).render('contacto', {
      titulo: 'Contacto',
      errores,
      datos: { nombre, email, mensaje },
      enviado: false,
    });
  }

  try {
    await contactoService.guardarMensaje({ nombre, email, mensaje });
    res.render('contacto', { titulo: 'Contacto', errores: {}, datos: {}, enviado: true });
  } catch (err) {
    logger.error(`No se pudo enviar el mail: ${err.message}`);
    // Mostramos el formulario de nuevo con los datos cargados y un aviso
    res.status(500).render('contacto', {
      titulo: 'Contacto',
      errores: {},
      datos: { nombre, email, mensaje },
      enviado: false,
      errorEnvio: true,
    });
  }
};

module.exports = { mostrarFormulario, enviarFormulario };
