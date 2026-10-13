const { Router } = require('express');
const { inicio } = require('../controllers/homeController');

const router = Router();
router.get('/', inicio);

module.exports = router;
