// src/controllers/workouts.controller.js

let workouts = [
  {
    id: 101,
    user_id: 5,
    title: "Rutina de Torso - Hipertrofia",
    scheduled_at: "2026-09-15T08:00:00Z",
    status: "pending",
    comments: "Aumentar peso en la última serie de press de banca.",
    exercises: [
      {
        exercise_id: 12,
        name: "Press de Banca",
        category: "fuerza",
        muscle_group: "pecho",
        sets: 4,
        reps: 10,
        weight_kg: 80.5
      }
    ],
    created_at: "2026-09-10T14:30:00Z"
  }
];

// GET /api/v1/workouts
const getWorkouts = (req, res) => {
  const { status } = req.query;
  let result = workouts;

  if (status) {
    result = result.filter(w => w.status === status);
  }

  return res.status(200).json({ status: "success", data: result });
};

// GET /api/v1/workouts/:id
const getWorkoutById = (req, res) => {
  const { id } = req.params;
  const workout = workouts.find(w => w.id === Number(id));

  if (!workout) {
    return res.status(404).json({ error: 'Entrenamiento no encontrado' });
  }

  return res.status(200).json({ status: "success", data: workout });
};

// POST /api/v1/workouts
const createWorkout = (req, res) => {
  const { title, scheduled_at, comments, exercises } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El título es requerido' });
  }

  const newWorkout = {
    id: Date.now(),
    user_id: 5, // Usuario simulado
    title,
    scheduled_at: scheduled_at || new Date().toISOString(),
    status: 'pending',
    comments: comments || '',
    exercises: exercises || [],
    created_at: new Date().toISOString()
  };

  workouts.push(newWorkout);
  return res.status(201).json({ status: "success", data: newWorkout });
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout
};