const { Router } = require('express');
const router = Router();

const M1Controller = require('../controllers/m1.cjs');

const M1 = new M1Controller();

router.post('/', M1.handleHttpRequest);

module.exports = router;