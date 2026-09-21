// src/controllers/workouts.controller.js

const getWorkouts = (req, res) => {
  const { limit = 10 } = req.query;

  const workouts = [
    { id: 101, title: "Rutina de Pecho y Tríceps", duration_min: 45, date: "2026-09-15" },
    { id: 102, title: "Rutina de Pierna Pesada", duration_min: 60, date: "2026-09-18" }
  ];

  return res.status(200).json({
    status: 'success',
    limit: Number(limit),
    data: workouts
  });
};

const getWorkoutById = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    status: 'success',
    data: { id: Number(id), title: "Rutina de Pecho y Tríceps", duration_min: 45, date: "2026-09-15" }
  });
};

const createWorkout = (req, res) => {
  const { title, duration_min } = req.body;

  if (!title || !duration_min) {
    return res.status(400).json({
      status: 'fail',
      message: 'Título y duración son requeridos'
    });
  }

  return res.status(201).json({
    status: 'success',
    message: 'Entrenamiento registrado exitosamente',
    data: { id: Date.now(), title, duration_min, date: new Date().toISOString() }
  });
};

// DELETE /api/v1/workouts/:id
const deleteWorkout = (req, res) => {
  const { id } = req.params;

  if (id === "999") {
    return res.status(404).json({
      status: 'fail',
      message: `El entrenamiento con ID ${id} no existe`
    });
  }

  // Estado HTTP 204 No Content para eliminación exitosa
  return res.status(204).send();
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout
};