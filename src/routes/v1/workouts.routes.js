// src/routes/v1/workouts.routes.js
const express = require('express');
const router = express.Router();
const {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout
} = require('../../controllers/workouts.controller');

router.get('/', getWorkouts);
router.get('/:id', getWorkoutById);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;