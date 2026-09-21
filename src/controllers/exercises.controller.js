// src/controllers/exercises.controller.js

// Catálogo maestro inicial de ejercicios (Seeder en memoria)
let exercises = [
  {
    id: 12,
    name: "Press de Banca",
    description: "Empuje horizontal para pectoral",
    category: "fuerza",
    muscle_group: "pecho"
  },
  {
    id: 18,
    name: "Remo con Barra",
    description: "Tracción horizontal para dorsal",
    category: "fuerza",
    muscle_group: "espalda"
  }
];

// GET /api/v1/exercises (con filtro dinámico por categoría)
const getExercises = (req, res) => {
  const { category } = req.query;
  let result = exercises;

  if (category) {
    result = result.filter(e => e.category.toLowerCase() === category.toLowerCase());
  }

  return res.status(200).json({ status: "success", data: result });
};

// GET /api/v1/exercises/:id
const getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find(e => e.id === Number(id));

  if (!exercise) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }

  return res.status(200).json({ status: "success", data: exercise });
};

// POST /api/v1/exercises
const createExercise = (req, res) => {
  const { name, description, category, muscle_group } = req.body;

  if (!name || !category || !muscle_group) {
    return res.status(400).json({ error: 'Campos requeridos incompletos' });
  }

  const newExercise = {
    id: Date.now(),
    name,
    description: description || '',
    category,
    muscle_group
  };

  exercises.push(newExercise);
  return res.status(201).json({ status: "success", data: newExercise });
};

module.exports = {
  getExercises,
  getExerciseById,
  createExercise
};