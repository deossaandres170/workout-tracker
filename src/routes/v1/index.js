// src/routes/v1/index.js
const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.routes');
const exercisesRoutes = require('./exercises.routes');
const workoutsRoutes = require('./workouts.routes');
const reportsRoutes = require('./reports.routes');
const authRoutes = require('./auth.routes');

// Montar sub-rutas
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workouts', workoutsRoutes);
router.use('/reports', reportsRoutes);
router.use('/auth', authRoutes);

module.exports = router;