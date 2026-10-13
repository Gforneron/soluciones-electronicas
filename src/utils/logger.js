// Logger mínimo. Más adelante se puede reemplazar por winston, pino, etc.
const fecha = () => new Date().toISOString();

module.exports = {
  info: (msg) => console.log(`[${fecha()}] INFO  ${msg}`),
  error: (msg) => console.error(`[${fecha()}] ERROR ${msg}`),
};
