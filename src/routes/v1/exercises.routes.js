const express = require('express');
const router = express.Router();
const { getExercises, getExerciseById, createExercise } = require('../../controllers/exercises.controller');

router.get('/', getExercises);
router.get('/:id', getExerciseById);
router.post('/', createExercise);

module.exports = router;