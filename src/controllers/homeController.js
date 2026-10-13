const solucionesService = require('../services/solucionesService');
const proyectosService = require('../services/proyectosService');

const inicio = (req, res) => {
  res.render('home', {
    titulo: 'Inicio',
    destacadas: solucionesService.obtenerDestacadas(3),
    proyectos: proyectosService.obtenerTodos(),
  });
};

module.exports = { inicio };
