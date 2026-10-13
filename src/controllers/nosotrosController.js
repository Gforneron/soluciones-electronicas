const equipoService = require('../services/equipoService');

const mostrar = (req, res) => {
  res.render('nosotros', {
    titulo: 'Nosotros',
    equipo: equipoService.obtenerEquipo(),
  });
};

module.exports = { mostrar };
