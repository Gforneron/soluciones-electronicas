const solucionesService = require('../services/solucionesService');

const listar = (req, res) => {
  res.render('soluciones/index', {
    titulo: 'Soluciones',
    soluciones: solucionesService.obtenerTodas(),
  });
};

const detalle = (req, res) => {
  const solucion = solucionesService.obtenerPorId(req.params.id);

  if (!solucion) {
    return res.status(404).render('404', { titulo: 'Solución no encontrada' });
  }

  res.render('soluciones/detalle', { titulo: solucion.titulo, solucion });
};

module.exports = { listar, detalle };
