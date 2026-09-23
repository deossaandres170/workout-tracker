// src/controllers/workouts.controller.js

// Arreglo en memoria para simulación de BD
let workouts = [
  { id: 1, name: "Rutina de Pecho y Tríceps", duration: 60, level: "intermedio" },
  { id: 2, name: "Rutina de Espalda y Bíceps", duration: 45, level: "principiante" }
];

// GET /api/v1/workouts
export const getWorkouts = (req, res, next) => {
  try {
    return res.status(200).json({
      status: 'success',
      data: workouts
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/workouts/:id
export const getWorkoutById = (req, res, next) => {
  try {
    const workoutId = Number(req.params.id);
    const workout = workouts.find((w) => w.id === workoutId);

    if (!workout) {
      return res.status(404).json({
        status: 'fail',
        message: `Entrenamiento con ID ${req.params.id} no encontrado`
      });
    }

    return res.status(200).json({
      status: 'success',
      data: workout
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/workouts
export const createWorkout = (req, res, next) => {
  try {
    const { name, duration, level } = req.body;

    if (!name || !duration) {
      return res.status(400).json({
        status: 'fail',
        message: 'Los campos name y duration son obligatorios'
      });
    }

    const newWorkout = {
      id: workouts.length > 0 ? workouts[workouts.length - 1].id + 1 : 1,
      name,
      duration: Number(duration),
      level: level || 'principiante'
    };

    workouts.push(newWorkout);

    return res.status(201).json({
      status: 'success',
      message: 'Entrenamiento creado exitosamente',
      data: newWorkout
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/v1/workouts/:id
export const updateWorkout = (req, res, next) => {
  try {
    const workoutId = Number(req.params.id);
    const { name, duration, level } = req.body;

    const index = workouts.findIndex((w) => w.id === workoutId);

    if (index === -1) {
      return res.status(404).json({
        status: 'fail',
        message: `Entrenamiento con ID ${req.params.id} no encontrado`
      });
    }

    if (!name || !duration || !level) {
      return res.status(400).json({
        status: 'fail',
        message: 'Todos los campos (name, duration, level) son requeridos para actualización completa'
      });
    }

    workouts[index] = { id: workoutId, name, duration: Number(duration), level };

    return res.status(200).json({
      status: 'success',
      message: `Entrenamiento ${workoutId} actualizado completamente`,
      data: workouts[index]
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/v1/workouts/:id
export const deleteWorkout = (req, res, next) => {
  try {
    const workoutId = Number(req.params.id);
    const index = workouts.findIndex((w) => w.id === workoutId);

    if (index === -1) {
      return res.status(404).json({
        status: 'fail',
        message: `Entrenamiento con ID ${req.params.id} no encontrado`
      });
    }

    workouts = workouts.filter((w) => w.id !== workoutId);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};