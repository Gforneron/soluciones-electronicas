const { Router } = require('express');
const { mostrar } = require('../controllers/nosotrosController');

const router = Router();
router.get('/', mostrar);

module.exports = router;
