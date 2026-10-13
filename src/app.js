require('dotenv').config();

const path = require('path');
const express = require('express');

const routes = require('./routers');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Motor de vistas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true })); // formularios
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public'))); // css, js, imágenes

// Variables disponibles en todas las vistas
app.use((req, res, next) => {
  res.locals.rutaActual = req.path;
  res.locals.nombreSitio = 'Soluciones Electrónicas';
  // Datos de contacto (se muestran en el footer). Reemplazalos por los reales.
  res.locals.datosContacto = {
    email: 'contacto@ejemplo.com',
    telefono: '+54 351 000 0000',
    direccion: 'Córdoba, Argentina',
    horario: 'Lunes a viernes, de 9 a 18 h',
  };
  next();
});

// Rutas
app.use('/', routes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).render('error', { titulo: 'Error del servidor' });
});

app.listen(PORT, () => {
  logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});
