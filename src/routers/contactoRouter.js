const { Router } = require('express');
const { mostrarFormulario, enviarFormulario } = require('../controllers/contactoController');

const router = Router();
router.get('/', mostrarFormulario);
router.post('/', enviarFormulario);

module.exports = router;
