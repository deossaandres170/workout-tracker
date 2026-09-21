const express = require('express');
const router = express.Router();
const { getWorkouts, getWorkoutById, createWorkout } = require('../../controllers/workouts.controller');

router.get('/', getWorkouts);
router.get('/:id', getWorkoutById);
router.post('/', createWorkout);

module.exports = router;