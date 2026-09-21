// src/routes/v1/reports.routes.js
const express = require('express');
const router = express.Router();
const { getProgressReport } = require('../../controllers/reports.controller');

// GET /api/v1/reports/progress
router.get('/progress', getProgressReport);

module.exports = router;