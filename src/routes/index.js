// src/routes/index.js
const express = require('express');
const router = express.Router();
const v1Routes = require('./v1');

// Redirigir /api/v1 a las rutas versionadas
router.use('/v1', v1Routes);

module.exports = router;