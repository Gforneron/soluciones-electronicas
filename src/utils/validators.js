const esEmailValido = (email = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Devuelve un objeto con los errores encontrados (vacío si todo está bien)
const validarContacto = ({ nombre, email, mensaje }) => {
  const errores = {};
  if (!nombre || nombre.trim().length < 2) errores.nombre = 'Ingresá tu nombre.';
  if (!esEmailValido(email)) errores.email = 'Ingresá un email válido.';
  if (!mensaje || mensaje.trim().length < 10) {
    errores.mensaje = 'Contanos tu consulta en al menos 10 caracteres.';
  }
  return errores;
};

module.exports = { esEmailValido, validarContacto };
