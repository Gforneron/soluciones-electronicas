const { Router } = require('express');

const homeRouter = require('./homeRouter');
const solucionesRouter = require('./solucionesRouter');
const nosotrosRouter = require('./nosotrosRouter');
const contactoRouter = require('./contactoRouter');

const router = Router();

router.use('/', homeRouter);
router.use('/soluciones', solucionesRouter);
router.use('/nosotros', nosotrosRouter);
router.use('/contacto', contactoRouter);

module.exports = router;
