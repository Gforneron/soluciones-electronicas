const { Router } = require('express');
const { listar, detalle } = require('../controllers/solucionesController');

const router = Router();
router.get('/', listar);
router.get('/:id', detalle);

module.exports = router;
