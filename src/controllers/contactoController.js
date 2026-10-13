const { validarContacto } = require('../utils/validators');
const contactoService = require('../services/contactoService');

const mostrarFormulario = (req, res) => {
  res.render('contacto', { titulo: 'Contacto', errores: {}, datos: {}, enviado: false });
};

const enviarFormulario = async (req, res, next) => {
  try {
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

    await contactoService.guardarMensaje({ nombre, email, mensaje });
    res.render('contacto', { titulo: 'Contacto', errores: {}, datos: {}, enviado: true });
  } catch (err) {
    next(err);
  }
};

module.exports = { mostrarFormulario, enviarFormulario };
