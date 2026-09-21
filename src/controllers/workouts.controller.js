// src/controllers/workouts.controller.js

export const getWorkouts = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: []
    });
  } catch (error) {
    next(error);
  }
};

export const createWorkout = async (req, res, next) => {
  try {
    res.status(201).json({
      status: 'success',
      message: 'Entrenamiento creado correctamente',
      data: req.body
    });
  } catch (error) {
    next(error);
  }
};

export const updateWorkout = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      status: 'success',
      message: `Entrenamiento con ID ${id} actualizado correctamente`,
      data: req.body
    });
  } catch (error) {
    next(error);
  }
};

export const deleteWorkout = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      status: 'success',
      message: `Entrenamiento con ID ${id} eliminado correctamente`
    });
  } catch (error) {
    next(error);
  }
};