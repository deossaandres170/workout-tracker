// src/controllers/users.controller.js

// Arreglo simulación de base de datos
const users = [
  { id: 1, name: "Juan Andrés Betancur", email: "andres@example.com", role: "user" },
  { id: 2, name: "Carlos Navia", email: "carlos@example.com", role: "admin" }
];

// GET /api/v1/users
export const getUsers = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: users
  });
};

// GET /api/v1/users/:id
export const getUserById = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${req.params.id} no encontrado`
    });
  }

  return res.status(200).json({
    status: 'success',
    data: user
  });
};

// POST /api/v1/users
export const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: 'fail',
      message: 'Los campos name y email son obligatorios'
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || 'user'
  };

  users.push(newUser);

  return res.status(201).json({
    status: 'success',
    message: 'Usuario creado exitosamente',
    data: newUser
  });
};

// PUT /api/v1/users/:id (Actualización completa)
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({
      status: 'fail',
      message: 'Todos los campos (name, email, role) son requeridos para actualización completa'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: `Usuario ${id} actualizado completamente`,
    data: { id: Number(id), name, email, role }
  });
};

// PATCH /api/v1/users/:id (Actualización parcial)
export const patchUser = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'Debe proporcionar al menos un campo para actualizar'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: `Campos del usuario ${id} actualizados parcialmente`,
    data: { id: Number(id), ...updates }
  });
};

// DELETE /api/v1/users/:id
export const deleteUser = (req, res) => {
  const { id } = req.params;

  // Estado HTTP 204 No Content
  return res.status(204).send();
};